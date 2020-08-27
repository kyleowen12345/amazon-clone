import React from "react";
import "../css/Product.css";
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

function Product({ id, title, price, rating, image }) {
	const [{ user }, dispatch] = useStateValue();

	const addToBasket = () => {
		// ADD item to basket..
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
							<p key={uuid()}>✡ </p>
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
