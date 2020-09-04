import React from "react";

const HistoryInfo = ({ image, price, rating, title, time }) => {
	console.log(time);
	return (
		<div>
			<p>{time}</p>
			<p>{title}</p>
			<p>{rating}</p>
			<p>{price}</p>
			<img src={image} alt="Please work........" />
		</div>
	);
};

export default HistoryInfo;
