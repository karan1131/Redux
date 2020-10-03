import { userDataActionTypes, removeDataTypes } from './users.types';

const initialState = {
	users: []
}

const addUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case userDataActionTypes.ADD_USER_DATA:
			return {
				...state,
				users: [...state.users,action.payload],
			};
		case removeDataTypes.REMOVE_USER_ALL_DATA:
			return {
				...state,
				users: [],
			};
		default:
			return state;
	}
};

export default addUserReducer;
