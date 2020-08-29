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
	// const [id, setId] = useState("");
	// const [item, setItem] = useState([]);
	// useEffect(() => {
	// 	db.collection("buyers").onSnapshot((snapshot) =>
	// 		setId(snapshot.docs.map((doc) => doc.data()))
	// 	);
	// }, []);

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
	// console.log(id.toString());
	// console.log(id);
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/checkout">
						<Header backButton="/" />
						<Checkout />
						<ScrollTop />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Header />
						<Home />
						<ScrollTop />
						<Footer />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
