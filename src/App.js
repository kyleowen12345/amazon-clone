import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebase";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

function App() {
	const [{ user }, dispatch] = useStateValue();
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
		return () => {
			unsubscribe();
		};
	}, [user, dispatch]);
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/checkout">
						<Header backButton="/" />
						<Checkout />
						<ScrollTop />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					{/* {user ? (
						<Route path="/home/:id">
							<Header />
							<Home />
							<ScrollTop />
							<Footer />
						</Route>
					) : (
						<Route path="/">
							<Header />
							<Home />
							<ScrollTop />
							<Footer />
						</Route>
					)} */}
					<Route path="/">
						<Header />
						<Home />
						<ScrollTop />
						<Footer />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
