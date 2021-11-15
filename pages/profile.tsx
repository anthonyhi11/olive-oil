import Header from "../components/SiteNavigation/Header";
import { store } from "../reduxTest";
import { useEffect, useState } from "react";

interface IUser {
	firstName: string;
	lastName: string;
	email: string;
	birthday: string;
}

function Profile() {
	const [user, setUser] = useState<IUser | null>(null);

	const unsubscribe = store.subscribe(() => {
		const userFromStore = store.getState();
		if (userFromStore.firstName !== null) {
			setUser(user);
		}
	});

	useEffect(() => {
		const storeUser = store.getState();
		setUser(storeUser);
		return () => unsubscribe();
	}, [user?.firstName]);

	return (
		<>
			<Header active="profile" />
			{user ? (
				<div>
					<p>{user.firstName}</p>
				</div>
			) : null}
		</>
	);
}

export default Profile;
