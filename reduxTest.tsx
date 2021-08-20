import { createStore } from "redux";

interface IUserState {
	firstName: string;
}

interface IUserAction {
	type: string;
	payload: string | null;
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
		if (state) {
			let userInfo = JSON.parse(state);
			return userInfo.firstName;
		}
	} catch {
		console.error("There was a problem loading user state from localStorage");
	}
}

function userReducer(state = { firstName: loadStateFromStorage() }, action: IUserAction) {
	switch (action.type) {
		case "loggedIn": {
			return { ...state, firstName: action.payload };
		}
		case "loggedOut":
			return { ...state, firstName: null };
		default:
			return state;
	}
}

const store = createStore(userReducer);

store.subscribe(() => {
	saveStateInStorage(store.getState());
});

export { store };
