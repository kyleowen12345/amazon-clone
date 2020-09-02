import React, { useEffect, useState, createContext } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

export const BasketContext = createContext();

const BasketProvider = (props) => {
	const [basketContainer, setBasketContainer] = useState([]);
	const { buyerId } = useParams();
	useEffect(() => {
		db.collection("buyers")
			.doc(buyerId)
			.collection("basket")
			.get()
			.then((snapshot) =>
				setBasketContainer(snapshot.docs.map((doc) => doc.data()))
			);
	}, [buyerId]);
	return (
		<BasketContext.Provider value={{ basketContainer }}>
			{props.children}
		</BasketContext.Provider>
	);
};

export default BasketProvider;
