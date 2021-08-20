import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "../../styles/header.module.css";

//TODO: link isn't styled correctly if I use
// LINK from next. but if i use Nav.Link, it has all the style perfect but
// it reloads the page.
// Probably just leave as is if planning on to use the library

interface IHeaderProps {
	active: string;
}

function Header({ active }: IHeaderProps) {
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
			</Nav>
		</Navbar>
	);
}

export default Header;
