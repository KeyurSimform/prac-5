import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "newUser",
	initialState: {
		newUser: {},
	},
	reducers: {
		addUser(state, action) {
			state.newUser = action.payload;
		},
	}
});
export const userActions = userSlice.actions;
export default userSlice;
