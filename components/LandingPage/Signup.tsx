import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { validatePassword, comparePasswords } from "./SignupUtils";
import styles from "../../styles/forms.module.css";

interface ISignupProps {
	show: boolean;
	handleClose: (arg1: boolean) => void;
}

function Signup({ show, handleClose }: ISignupProps) {
	const [error, setError] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	function handleSignup() {
		console.log("signup pls");
		handleClose(false)
	}

	function setFormError(state: boolean, message: string) {
		setError(state);
		setErrorMessage(message);
	}

	return (
		<>
			<Modal show={show} onHide={() => handleClose(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicFirstName">
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" placeholder="First Name" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicLastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" placeholder="Last Name" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								onChange={(e) => {
									setPassword(e.target.value);
									validatePassword(e.target.value, setFormError);
								}}
							/>
							<Form.Text
								className={
									error ? `text-muted ${styles.form_error}` : "text-muted"
								}
							>
								{error
									? errorMessage
									: "Must be 8 characters and include a number and capital letter"}
							</Form.Text>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Confirm Password"
								onChange={(e) =>
									comparePasswords(password, e.target.value, setFormError)
								}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => handleClose(false)}>
						Close
					</Button>
					<Button variant="primary" onClick={() => handleSignup()}>
						Sign up
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Signup;
