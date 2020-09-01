import React from "react";
import "../css/Product.css";
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import StarRateIcon from "@material-ui/icons/StarRate";
import { db } from "../firebase";

function Product({ id, title, price, rating, image }) {
	const [{ user }, dispatch] = useStateValue();
	// undifined mao ning error
	const { buyerId } = useParams();
	console.log(buyerId);
	const addToBasket = () => {
		// ADD item to basket..
		const unsubscribe = db
			.collection("buyers")
			.doc("z1m7pR7JX8c9tHareGu0d7RL6EX2")
			.collection("basket")
			.add({
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			});
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id,
				title,
				image,
				price,
				rating,
			},
		});
		return () => {
			unsubscribe();
		};
	};
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>{" "}
				</p>
				<div className="product__rating">
					{/* for the stars */}
					{Array(rating)
						.fill()
						.map((_) => (
							<StarRateIcon key={uuid()} />
						))}
				</div>
			</div>
			<img src={image} alt="" />
			{user === null ? (
				<Link to="/login" className="product__blank">
					<span>See more</span>
				</Link>
			) : (
				<button onClick={addToBasket}>Add to basket</button>
			)}
		</div>
	);
}

export default Product;
