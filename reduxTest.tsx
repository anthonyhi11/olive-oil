import { createStore } from "redux";

interface IUserState {
	firstName: string | null;
	lastName: string | null;
	email: string | null;
	birthday: string | null;
}

interface IUserAction {
	type: string;
	payload: IUserState | null;
}

function saveStateInStorage(state: IUserState) {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("userState", serializedState);
	} catch {
		console.error("There was a problem saving user state in localStorage");
	}
}

function loadStateFromStorage() {
	try {
		const state = localStorage.getItem("userState");
		if (state !== null) {
			let userInfo = JSON.parse(state);
			return userInfo;
		} else {
			return {
				firstName: null,
				lastName: null,
				birthday: null,
				email: null,
			};
		}
	} catch {
		console.error("There was a problem loading user state from localStorage");
	}
}

function userReducer(state = loadStateFromStorage(), action: IUserAction) {
	switch (action.type) {
		case "loggedIn": {
			return {
				...state,
				firstName: action.payload?.firstName,
				lastName: action.payload?.lastName,
				birthday: action.payload?.birthday,
				email: action.payload?.email,
			};
		}
		case "loggedOut":
			return {
				...state,
				firstName: null,
				lastName: null,
				birthday: null,
				email: null,
			};
		default:
			return state;
	}
}

const store = createStore(userReducer);

store.subscribe(() => {
	saveStateInStorage(store.getState());
});

export { store };
