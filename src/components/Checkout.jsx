import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "../css/Checkout.css";
import Subtotal from "./Subtotal";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { db } from "../firebase";
import Loader from "react-loader-spinner";

function Checkout() {
	const [{ user }] = useStateValue();
	const [basketContainer, setBasketContainer] = useState([]);
	const { buyerId } = useParams();
	useEffect(() => {
		if (user?.uid !== buyerId) {
			setBasketContainer([]);
		} else {
			const unsubscribe = db
				.collection("buyers")
				.doc(buyerId)
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
		}
	}, [buyerId, user]);

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
					<div className="app__loader">
						<Loader
							type="ThreeDots"
							color="#f0c14b"
							height={150}
							width={150}
							timeout={3000} //3 secs
						/>
					</div>
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
							<div className="app__loader">
								<Loader
									type="Puff"
									color="#00BFFF"
									height={100}
									width={100}
									timeout={3000} //3 secs
								/>
							</div>
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
