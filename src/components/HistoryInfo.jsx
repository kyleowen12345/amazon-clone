import React from "react";
import "../css/HistoryInfo.css";
import { v4 as uuid } from "uuid";
import StarRateIcon from "@material-ui/icons/StarRate";

const HistoryInfo = ({ image, price, rating, title, time, date }) => {
	// console.log(time);
	return (
		<div className="historyInfo">
			<p className="historyInfo__title">{title}</p>
			<div className="historyInfo__product">
				<img
					src={image}
					alt="Please work........"
					className="historInfo__img"
				/>
				<div className="historInfo__rp">
					<p className="historInfo__price">
						<strong>$</strong> {price}
					</p>
					<div className="historInfo__rating">
						{Array(rating)
							.fill()
							.map((_) => (
								<StarRateIcon key={uuid()} />
							))}
					</div>
					<p className="historInfo__date">
						Purchase Date : <strong>{date}</strong>{" "}
					</p>
					<p className="historInfo__date">
						Purchase Time : <strong>{time}</strong>{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default HistoryInfo;
