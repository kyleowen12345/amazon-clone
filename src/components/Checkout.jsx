import React from "react";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "../css/Checkout.css";
import Subtotal from "./Subtotal";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

function Checkout() {
	const [{ basket, user }] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				{!user ? <div></div> : basket.length > 0 && <Subtotal />}
				{!user ? (
					<h2 className="checkout__logintext">
						You must{" "}
						<Link to="/login" className="checkout__login">
							Login
						</Link>{" "}
						first to use the basket
					</h2>
				) : basket?.length === 0 ? (
					<div>
						<h2 className="checkout__empty">Your Shopping Basket is empty</h2>
						<p>
							You have no items in your basket. To buy one or more items, click
							"Add to basket" next to the item
						</p>
					</div>
				) : (
					<div>
						<h2 className="checkout__title">Your Shopping Basket</h2>
						{/* list of all checkout products */}
						{!user ? (
							<div></div>
						) : (
							basket.map((item) => {
								return (
									<CheckoutProduct
										key={uuid()}
										id={item.id}
										title={item.title}
										image={item.image}
										price={item.price}
										rating={item.rating}
									/>
								);
							})
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default Checkout;
