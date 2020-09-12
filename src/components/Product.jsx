import React from "react";
import "../css/Product.css";
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import StarRateIcon from "@material-ui/icons/StarRate";
import { db } from "../firebase";
import firebase from "firebase";

function Product({ id, title, price, rating, image }) {
	const [{ user }] = useStateValue();
	const addToBasket = async () => {
		try {
			await db.collection("buyers").doc(user?.uid).collection("basket").add({
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
				purchasedAt: firebase.firestore.FieldValue.serverTimestamp(),
			});
		} catch (error) {
			console.log(error);
		}
	};
	const handleView = () => {
		alert("works");
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
			<img src={image} alt="" onClick={handleView} />
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
