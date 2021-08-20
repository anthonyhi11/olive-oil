import React, { useState, useEffect } from "react";
import styles from "../../styles/home.module.css";
import { Button } from "react-bootstrap";
import Login from "./Login";
import Signup from "./Signup";
import { store } from "../../reduxTest";

function LandingPage() {
	const [showLogin, setShowLogin] = useState<boolean>(false);
	const [showSignup, setShowSignup] = useState<boolean>(false);

	return (
		<>
			<div className={styles.heroContainer}>
				<h1 className={styles.heroStatement}>
					Welcome to your kitchen's new best friend.
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
