import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "../css/Checkout.css";
import Subtotal from "./Subtotal";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { db } from "../firebase";
// import FlipMove from "react-flip-move";

function Checkout() {
	const [{ user }] = useStateValue();
	const [basketContainer, setBasketContainer] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const unsubscribe = await db
					.collection("buyers")
					.doc(user?.uid)
					.collection("basket")
					.orderBy("purchasedAt", "desc")
					.onSnapshot((snapshot) =>
						setBasketContainer(
							snapshot.docs.map((doc) => ({
								id: doc.id,
								item: doc.data(),
							}))
						)
					);
				return () => {
					unsubscribe();
				};
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, [user]);
	// console.log(basketContainer.length);

	return (
		<div className="checkout">
			<div className="checkout__left">
				{!user ? (
					<div></div>
				) : (
					basketContainer?.length > 0 && (
						<Subtotal basketContainer={basketContainer} />
					)
				)}
				{!user ? (
					<h2 className="checkout__logintext">
						You must{" "}
						<Link to="/login" className="checkout__login">
							Login
						</Link>{" "}
						first to use the basket
					</h2>
				) : basketContainer?.length === 0 ? (
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
							basketContainer?.map((bas) => {
								return (
									<CheckoutProduct
										key={uuid()}
										id={bas.id}
										title={bas.item.title}
										image={bas.item.image}
										price={bas.item.price}
										rating={bas.item.rating}
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
