import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import { useStateValue } from "../context/StateProvider";
import HistoryInfo from "./HistoryInfo";
import { v4 as uuid } from "uuid";
import "../css/History.css";
import HistoryIcon from "@material-ui/icons/History";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";

const History = () => {
	const [{ user }] = useStateValue();
	const [basketContains, setBasketContains] = useState([]);
	// const [loading, setLoading] = useState("");
	// const [time, setTime] = useState("");
	// const timeBaby = basketContainer.map((basket) => setTime(basket.timestamp));
	const { buyerId } = useParams();
	useEffect(() => {
		if (user?.uid !== buyerId) {
			setBasketContains([]);
		} else {
			const unsubscribe = db
				.collection("buyers")
				.doc(buyerId)
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

			return () => {
				unsubscribe();
			};
		}
	}, [buyerId, user]);

	if (!user) {
		return (
			<div className="history__loader">
				<Loader
					type="ThreeDots"
					color="#f0c14b"
					height={150}
					width={150}
					timeout={3000} //3 secs
				/>
			</div>
		);
	} else {
		return (
			<div className="history">
				<h1>Purchase History</h1>
				{basketContains.length === 0 ? (
					<div className="history__icon">
						<HistoryIcon />
						<p>No purchases made yet</p>
					</div>
				) : (
					basketContains.map((bas) =>
						bas.basket.map((b) => {
							return (
								<HistoryInfo
									image={b.image}
									price={b.price}
									rating={b.rating}
									title={b.title}
									key={uuid()}
									date={new Date(b.purchasedAt.toDate()).toLocaleDateString()}
									time={new Date(b.purchasedAt.toDate()).toLocaleTimeString()}
									basket={basketContains}
								/>
							);
						})
					)
				)}
			</div>
		);
	}
};

export default History;
