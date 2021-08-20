function validatePassword(
	password: string,
	setFormError: (state: boolean, message: string) => void
) {
	if (password.length < 8) {
		setFormError(true, "Password must be at least 8 characters");
	} else {
		setFormError(false, "");
	}
}

function comparePasswords(
	existingPass: string,
	newPass: string,
	setFormError: (state: boolean, message: string) => void
) {
	if (existingPass !== newPass) {
		setFormError(true, "Passwords must match");
	} else {
		setFormError(false, "");
	}
}

export {validatePassword, comparePasswords};
