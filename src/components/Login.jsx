import React, { useState } from "react";
import "../css/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../firebase";
import { useStateValue } from "../context/StateProvider";
import loader from "../img/loading.gif";

function Login() {
	const [{ user }] = useStateValue();
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verification, setVerification] = useState("");
	const [loading, setLoading] = useState("");

	const login = (e) => {
		e.preventDefault();
		if (!user) setLoading(loader);

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				//  logged in , redirect to homepage
				const userId = auth.user.uid;
				history.push(`/buyer/${userId}`);
			})
			.catch((e) => setVerification(e.message) & setLoading(""));
	};
	const register = (e) => {
		e.preventDefault();
		if (!user) setLoading(loader);

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				// create a user adn log in
				const userId = auth.user.uid;

				history.push(`/buyer/:${userId}`);
				// console.log(userId);
				db.collection("buyers").doc(userId).set({
					email: email,
					id: auth.user.uid,
				});
			})
			.catch((e) => setVerification(e.message) & setLoading(""));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt=""
					className="login__logo"
				/>
			</Link>
			{!loading ? (
				<div className="login__container">
					<h1>Sign in</h1>
					<p className="login__verification">{verification}</p>
					<form action="">
						<h4>E-mail</h4>
						<input
							type="email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<h4>Password</h4>
						<input
							type="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>

						<button
							onClick={login}
							type="submit"
							className="login__signInButton"
						>
							Sign In
						</button>
					</form>
					<p>
						By signing-in you agree to Amazon's Conditions of Use & Sale. Please
						see our Privacy Notice, our Cookie Notice and our Interest-Based Ads
						Notice.
					</p>
					<button onClick={register} className="login__registerButton">
						Create you Amazon Account
					</button>
				</div>
			) : (
				<img
					src={loading}
					alt="loading......"
					value={loading}
					className="login__loader"
				/>
			)}
		</div>
	);
}

export default Login;
