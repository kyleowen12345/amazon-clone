import React from "react";
import "../css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../context/reducer";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// import { db } from "../firebase";

function Subtotal({ basketContainer }) {
	const [{ basket }, dispatch] = useStateValue();
	// const [modalBaskets, setModalBaskets] = useState([]);
	// for the modal
	const [open, setOpen] = React.useState(false);
	// const basketTitle = basket.map((b) => b.title);
	const handleOpen = () => {
		setOpen(true);
		// setModalBaskets(basketTitle);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleBuy = () => {
		console.log(basket.map((b) => b.price));
		setOpen(false);
		// db.collection('buyers').doc(d)
	};
	const totalPrice = basketContainer.map((bas) => bas.item.price);
	console.log(totalPrice);

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basketContainer.length} item(s)) :{" "}
							<strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							This order contains
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(totalPrice)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<div>
				<button type="button" onClick={handleOpen} className="subtotal__button">
					Buy Item(s)
				</button>
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					// className={classes.modal}
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
					className="subtotal__modal"
				>
					<Fade in={open}>
						<div className="subtotal__modalInsides">
							<p id="transition-modal-title">
								Are you Sure that you want to buy this item(s)?
							</p>
							<p className="subtotal__modalcost">
								Total costs: ${Math.round(getBasketTotal(totalPrice))}
							</p>

							<br />
							<button onClick={handleBuy} className="subtotal__confirmbutton">
								Yes
							</button>
							<button onClick={handleClose} className="subtotal__confirmbutton">
								No
							</button>
						</div>
					</Fade>
				</Modal>
			</div>
		</div>
	);
}

export default Subtotal;
