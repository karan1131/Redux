import { userDataActionTypes, removeDataTypes } from './users.types';

export const addUserData =  (data) => {
	console.log(data)
	return {
		type: userDataActionTypes.ADD_USER_DATA,
		payload: data,
	};
};

export const removeUserData = () => {
	console.log('1')
	return {
		type: removeDataTypes.REMOVE_USER_ALL_DATA,
	};
};