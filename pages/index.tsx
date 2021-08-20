import React, { useEffect, useState } from "react";
import LandingPage from "../components/LandingPage/LandingPage";
import LoggedInHome from "../components/LoggedInHome/LoggedInHome";
import Header from "../components/SiteNavigation/Header";
import { store } from "../reduxTest";

export default function Home() {
	const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

	const unsubscribe = store.subscribe(() => {
		const user = store.getState();
		setUserLoggedIn(user?.firstName);
	});

	useEffect(() => {
		const userInfo = store.getState();
		if (userInfo.firstName !== null) {
			setUserLoggedIn(true);
		} else {
			setUserLoggedIn(false);
		}
		return () => unsubscribe();
	}, []);

	return (
		<>
			<Header active="/" />
			{userLoggedIn ? <LoggedInHome /> : <LandingPage />}
		</>
	);
}
