import React from "react";
import "../css/CheckoutProduct.css";
// import { useStateValue } from "../context/StateProvider";
import { v4 as uuid } from "uuid";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

function CheckoutProduct({ id, title, price, image, rating }) {
	const { buyerId } = useParams();

	const removeBasket = async () => {
		//   remove item
		await db
			.collection("buyers")
			.doc(buyerId)
			.collection("basket")
			.doc(id)
			.delete();
	};

	return (
		<div className="checkoutProduct">
			<img src={image} alt="" className="checkoutProduct__image" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_) => (
							<StarRateIcon key={uuid()} />
						))}
				</div>
				<button onClick={removeBasket}>Remove from basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
