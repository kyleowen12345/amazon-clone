import React, { useState } from "react";
import "../css/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../firebase";
import { useStateValue } from "../context/StateProvider";

function Login() {
	const [{ user }] = useStateValue();
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verification, setVerification] = useState("");
	const [loading, setLoading] = useState("");
	const login = (e) => {
		e.preventDefault();
		if (!user)
			setLoading(
				"https://media2.giphy.com/media/sSgvbe1m3n93G/200w.gif?cid=ecf05e4794gsc5hkau7noshjd7dqmoblee3esiecijj6cfnv&rid=200w.gif"
			);

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				//  logged in , redirect to homepage
				history.push("/");
			})
			.catch((e) => setVerification(e.message) & setLoading(""));
	};
	const register = (e) => {
		e.preventDefault();
		if (!user)
			setLoading(
				"https://media2.giphy.com/media/sSgvbe1m3n93G/200w.gif?cid=ecf05e4794gsc5hkau7noshjd7dqmoblee3esiecijj6cfnv&rid=200w.gif"
			);
		db.collection("buyers").add({
			email: email,
		});

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				// create a user adn log in
				history.push("/");
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
			<div className="login__container">
				<h1>Sign in</h1>
				<p className="login__verification">{verification}</p>
				<form action="">
					<h4>E-mail</h4>
					{!loading ? (
						<>
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
						</>
					) : (
						<img
							src={loading}
							alt="loading......"
							value={loading}
							className="login__loader"
						/>
					)}
					<button onClick={login} type="submit" className="login__signInButton">
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
		</div>
	);
}

export default Login;
