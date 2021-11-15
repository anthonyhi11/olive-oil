import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/container.module.css";
import React from 'react';

function MyApp({Component, pageProps}) {
	return (
		<div className={styles.main_container}>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
