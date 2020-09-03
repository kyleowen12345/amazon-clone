import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import { useParams } from "react-router-dom";

const History = () => {
	const [basketContainer, setBasketContainer] = useState([]);
	const { buyerId } = useParams();
	useEffect(() => {
		const unsubscribe = db
			.collection("buyers")
			.doc(buyerId)
			.collection("purchasedItems")
			.onSnapshot((snapshot) =>
				setBasketContainer(snapshot.docs.map((doc) => doc.data()))
			);
		return () => {
			unsubscribe();
		};
	}, [buyerId]);
	console.log(buyerId);
	console.log(basketContainer.map((basket) => basket.timestamp));
	console.log(
		basketContainer.map((basket) =>
			basket.basketContainer.map((bas) => bas.title)
		)
	);
	// console.log(basketContainer);
	return (
		<div>
			<h1>This is history </h1>
		</div>
	);
};

export default History;
