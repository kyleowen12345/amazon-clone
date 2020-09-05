import React from "react";
import "../css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useStateValue } from "../context/StateProvider";
import { db } from "../firebase";
// import { useParams } from "react-router-dom";
import firebase from "firebase";

function Subtotal({ basketContainer }) {
	const [{ user }] = useStateValue();
	const basketID = basketContainer.map((basket) => basket.id);
	// const [modalBaskets, setModalBaskets] = useState([]);
	// for the modal
	// const { buyerId } = useParams();
	const [open, setOpen] = React.useState(false);
	// const basketTitle = basket.map((b) => b.title);
	const handleOpen = () => {
		setOpen(true);
		// setModalBaskets(basketTitle);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleBuy = async () => {
		const basketItem = basketContainer.map((basket) => basket.item);
		try {
			await db
				.collection("buyers")
				.doc(user?.uid)
				.collection("purchasedItems")
				.add({
					timestamp: firebase.firestore.FieldValue.serverTimestamp(),
					account: user.email,
					basketContainer: basketItem,
				});
			await db
				.collection("buyers")
				.doc(user?.uid)
				.collection("basket")
				.onSnapshot((snapshot) => snapshot.docs.map((doc) => doc.ref.delete()));

			setOpen(false);
			window.location.reload(false);
		} catch (error) {
			console.log(error);
		}
	};
	const totalPrice = basketContainer
		.map((bas) => bas.item.price)
		.reduce((a, b) => a + b, 0);
	// console.log(getBasketTotal(totalPrice));
	// console.log(totalPrice);
	// console.log(basketContainer.map((basket) => basket.item.purchased));

	console.log(basketID.toString());

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
				value={totalPrice}
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
								Total costs: ${Math.round(totalPrice)}
							</p>

							<br />
							<div className="subtotal__buttons">
								<button onClick={handleBuy} className="subtotal__confirmbutton">
									Yes
								</button>
								<button
									onClick={handleClose}
									className="subtotal__confirmbutton"
								>
									No
								</button>
							</div>
						</div>
					</Fade>
				</Modal>
			</div>
		</div>
	);
}

export default Subtotal;
