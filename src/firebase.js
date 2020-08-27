import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBVoZ6LWp4AXmr1cLBCNsSxwhwLpFiN7N4",
	authDomain: "clone-242c5.firebaseapp.com",
	databaseURL: "https://clone-242c5.firebaseio.com",
	projectId: "clone-242c5",
	storageBucket: "clone-242c5.appspot.com",
	messagingSenderId: "751145746824",
	appId: "1:751145746824:web:00cd76f27cfd2d5072ba3d",
	measurementId: "G-Z08QX505M5",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
