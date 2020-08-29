import React from "react";
import "../css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../context/reducer";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

function Subtotal() {
	const [{ basket, quantity }] = useStateValue();
	// for the modal
	const useStyles = makeStyles((theme) => ({
		modal: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		paper: {
			backgroundColor: theme.palette.background.paper,
			border: "2px solid #000",
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
		},
	}));
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket.length} item(s)) : <strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							This order contains
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket, quantity)}
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
					className={classes.modal}
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Fade in={open}>
						<div className={classes.paper}>
							<h3 id="transition-modal-title">
								Are you Sure that you will buy this item
							</h3>
							<br />
							<button onClick={handleClose}>Yes</button>
							<button onClick={handleClose}>No</button>
						</div>
					</Fade>
				</Modal>
			</div>
		</div>
	);
}

export default Subtotal;
