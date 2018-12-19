import { UserActions, UserActionTypes } from "./user.actions";

export interface UserState {
	maskUserName: boolean;
}

const initialState: UserState = {
	maskUserName: true
}

export function reducer(state = initialState, action: UserActions): UserState {
	switch (action.type) {
		case UserActionTypes.MaskUserName:
			return {
				...state,
				maskUserName: action.payload
			}

		default:
			return state;
	}
}