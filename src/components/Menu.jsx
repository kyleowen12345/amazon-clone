import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import "../css/Header.css";

const Menu = ({ login }) => {
	const [{ user }] = useStateValue();
	return (
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
			<Link to={`/history/${user?.uid}`} className="header__link">
				<div className="header__option">
					<span className="header__optionLineTwo">Purchase History</span>
				</div>
			</Link>
		</div>
	);
};

export default Menu;
