import React, { useState, useEffect } from "react";
import styles from "../../styles/home.module.css";
import { Button } from "react-bootstrap";
import Login from "./Login";
import Signup from "./Signup";
import { store } from "../../reduxTest";

function LandingPage() {
	const [showLogin, setShowLogin] = useState<boolean>(false);
	const [showSignup, setShowSignup] = useState<boolean>(false);
	const [userName, setUserName] = useState<string | null>(null);

	function handleUserInfo() {
		const userInfo = store.getState();
		setUserName(userInfo.firstName);
	}

	useEffect(() => {
		handleUserInfo();
	}, [showLogin, showSignup]);

	return (
		<>
			<div className={styles.heroContainer}>
				<h1 className={styles.heroStatement}>
					Welcome to your kitchen's new best friend,{" "}
					{userName ? `${userName}!` : "Stranger."}
				</h1>
				<div className={styles.buttonContainer}>
					<Button
						className={styles.homeCTAButtons}
						onClick={() => setShowLogin(true)}
					>
						Login
					</Button>
					<Button
						className={styles.homeCTAButtons_variant}
						onClick={() => setShowSignup(true)}
					>
						Signup
					</Button>
				</div>
			</div>
			{showLogin && (
				<Login show={showLogin} handleClose={() => setShowLogin(false)} />
			)}
			{showSignup && (
				<Signup show={showSignup} handleClose={() => setShowSignup(false)} />
			)}
		</>
	);
}

export default LandingPage;
