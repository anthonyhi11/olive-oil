import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { store } from "../../reduxTest";

interface ILoginProps {
	show: boolean;
	handleClose: (arg1: boolean) => void;
}

function Login({ show, handleClose }: ILoginProps) {
	const [userName, setUserName] = useState<string>("");

	function doLogin() {
		handleClose(false);
		store.dispatch({ type: "loggedIn", payload: userName });
	}

	return (
		<>
			<Modal show={show} onHide={() => handleClose(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								onChange={(e) => setUserName(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => handleClose(false)}>
						Close
					</Button>
					<Button variant="primary" onClick={doLogin}>
						Login
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Login;
