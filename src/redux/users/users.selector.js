import { createSelector } from 'reselect';

const userDataSelector = users => {
	return users;
}

export const selectUserData = createSelector(
	[userDataSelector],
	users => {
		return users
	}
);

export const removeAllUserData = createSelector(
	[userDataSelector],
	users => {
		return users
	}
);