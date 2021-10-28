import { Button } from "react-bootstrap";
import styles from "../../styles/home.module.css";
import { store } from "../../reduxTest";

function LoggedInHome() {
	function logout() {
		store.dispatch({ type: "loggedOut", payload: null });
	}

	const user = store.getState().firstName;

	return (
		<div>
			<h2>{`${`Welcome back, ${
				user === null ? "Stranger" : user
			}`}! What's cooking?`}</h2>
			<Button className={styles.homeCTAButtons} onClick={() => logout()}>
				Logout
			</Button>
		</div>
	);
}

export default LoggedInHome;
