import React, { useState } from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
	const [{ basket, user }] = useStateValue();
	const [open, setOpen] = useState(false);

	const login = () => {
		if (user) {
			auth.signOut();
		}
	};
	if (open) {
		return (
			<div className="header__humbergerMenu">
				<nav className="header">
					{/* logo on the left */}
					<Link to="/login">
						<img
							src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
							alt=""
							className="header__logo"
						/>
					</Link>
					<div className="header__humber" onClick={() => setOpen(!open)}>
						{open ? <CloseIcon /> : <MenuIcon />}
					</div>
					<Link to="/checkout" className="header__link">
						<div className="header__optionBasket">
							{/* Shopping basket icon */}
							<ShoppingBasketIcon />
							{/* Number of items in the basket */}
							<span className="header__optionLineTwo header__basketCount">
								{user === null ? 0 : basket?.length}
							</span>
						</div>
					</Link>
				</nav>
				<hr />
				<div className="header__menu">
					<div className="header__link">
						<Link to={!user && "/login"} />
						<div onClick={login} className="header__option">
							{!user ? (
								<div>
									<h3>Hello</h3>
								</div>
							) : (
								<span className="header__optionLineOne">
									Hello <h4>{user?.email}</h4>
								</span>
							)}

							<span className="header__optionLineTwo">
								{user ? (
									<Link to="/" className="header__out">
										{"Sign Out?"}
									</Link>
								) : (
									<Link to="/login" className="header__out">
										{"Sign in/up?"}
									</Link>
								)}
							</span>
						</div>
					</div>
					<Link to="/" className="header__link">
						<div className="header__option">
							<span className="header__optionLineTwo">Returns & Orders</span>
						</div>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<nav className="header">
			{/* logo on the left */}
			<Link to="/login">
				<img
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
					className="header__logo"
				/>
			</Link>
			{/* Search Box */}
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			{/* 3 links */}
			<div className="header__nav">
				{/* 1st link */}
				<div className="header__link">
					<Link to={!user && "/login"} />
					<div onClick={login} className="header__option">
						<span className="header__optionLineOne">Hello {user?.email}</span>
						<span className="header__optionLineTwo">
							{user ? (
								<Link to="/" className="header__out">
									{"Sign Out?"}
								</Link>
							) : (
								<Link to="/login" className="header__out">
									{"Sign in/up?"}
								</Link>
							)}
						</span>
					</div>
				</div>
				{/* 2nd link */}
				<Link to="/" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>
				{/* 3rd link */}
				<Link to="/" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
				</Link>
			</div>
			<div className="header__humber" onClick={() => setOpen(!open)}>
				<MenuIcon />
			</div>
			<Link to="/checkout" className="header__link">
				<div className="header__optionBasket">
					{/* Shopping basket icon */}
					<ShoppingBasketIcon />
					{/* Number of items in the basket */}
					<span className="header__optionLineTwo header__basketCount">
						{user === null ? 0 : basket?.length}
					</span>
				</div>
			</Link>
		</nav>
	);
}

export default Header;
