import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import { useStateValue } from "../context/StateProvider";
import HistoryInfo from "./HistoryInfo";
import { v4 as uuid } from "uuid";

const History = () => {
	const [{ user }] = useStateValue();
	const [basketContains, setBasketContains] = useState([]);
	// const [time, setTime] = useState("");
	// const timeBaby = basketContainer.map((basket) => setTime(basket.timestamp));
	useEffect(() => {
		// const abortController=new AbortController()
		const abortController = new AbortController();
		const fetchData = async () => {
			try {
				fetch(user, { signal: abortController.signal });
				await db
					.collection("buyers")
					.doc(user?.uid)
					.collection("purchasedItems")
					.orderBy("timestamp", "desc")
					.onSnapshot((snapshot) =>
						setBasketContains(
							snapshot.docs.map((doc) => ({
								time: doc.data().timestamp,
								basket: doc.data().basketContainer,
							}))
						)
					);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
		return () => {
			abortController.abort();
		};
	}, [user]);
	// console.log(basketContains.map((bas) => bas.container));

	// const time = basketContains.map((bas) =>
	// 	new Date(bas.time.toDate()).toLocaleDateString()
	// );
	// console.log(basketContainer);
	return (
		<div>
			{basketContains.map((bas) =>
				bas.basket.map((b) => {
					return (
						<HistoryInfo
							image={b.image}
							price={b.price}
							rating={b.rating}
							title={b.title}
							key={uuid()}
							// time={time}
						/>
					);
				})
			)}
		</div>
	);
};

export default History;
