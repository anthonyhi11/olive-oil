import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "../../styles/header.module.css";
import { store } from "../../reduxTest";
import ProfileIcon from "./ProfileIcon";

//TODO: link isn't styled correctly if I use
// LINK from next. but if i use Nav.Link, it has all the style perfect but
// it reloads the page.
// Probably just leave as is if planning on to use the library

interface IHeaderProps {
	active: string;
}

interface IUserInitials {
	first: string;
	last: string;
}

function Header({ active }: IHeaderProps) {
	const [userInitials, setUserInitials] = useState<IUserInitials | null>(null);

	const unsubscribe = store.subscribe(() => {
		const user = store.getState();
		if (user.firstName !== null) {
			const userInitials: IUserInitials = {
				first: user.firstName[0],
				last: user.lastName[0],
			};
			setUserInitials(userInitials);
		} else {
			setUserInitials(null);
		}
	});

	useEffect(() => {
		const user = store.getState();
		if (user.firstName !== null) {
			const userInitials: IUserInitials = {
				first: user.firstName[0],
				last: user.lastName[0],
			};
			setUserInitials(userInitials);
		} else {
			setUserInitials(null);
		}
		return () => unsubscribe();
	}, []);
	return (
		<Navbar variant="light" sticky="top">
			<Navbar.Brand className={styles.headerNavBrand} href="/">
				Olive Oil
			</Navbar.Brand>

			<Nav activeKey={active}>
				<Nav.Item>
					<Nav.Link href="/">Home</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/about">About</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/scraper">Scraper</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/contact">Contact</Nav.Link>
				</Nav.Item>
				{userInitials !== null && (
					<Nav.Item>
						<ProfileIcon
							firstInitial={userInitials.first}
							lastInitial={userInitials.last}
						/>
					</Nav.Item>
				)}
			</Nav>
		</Navbar>
	);
}

export default Header;
