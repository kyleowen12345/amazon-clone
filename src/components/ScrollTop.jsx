import React, { useState, useEffect } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import "../css/ScrollTop.css";
import { useWindowScroll } from "react-use";

const ScrollTop = () => {
	const { y: pageYOffset } = useWindowScroll();
	const [visible, setVisibility] = useState(false);

	useEffect(() => {
		if (pageYOffset > 500) {
			setVisibility(true);
		} else {
			setVisibility(false);
		}
	}, [pageYOffset]);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	if (!visible) {
		return false;
	}
	return (
		<div className="scroll__toTop" onClick={scrollToTop}>
			<ExpandLessIcon />
		</div>
	);
};

export default ScrollTop;
