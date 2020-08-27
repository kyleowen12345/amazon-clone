import React from "react";
import "../css/CheckoutProduct.css";
import { useStateValue } from "../context/StateProvider";
import { v4 as uuid } from "uuid";

function CheckoutProduct({ id, title, price, image, rating }) {
	const [{}, dispatch] = useStateValue();
	const removeBasket = () => {
		//   remove item
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
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
							<p key={uuid()}>✡ </p>
						))}
				</div>
				<button onClick={removeBasket}>Remove from basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
