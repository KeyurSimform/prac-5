import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import UserApi from "../componenet/UserApi/UserApi";

export const fetchAsyncUser = createAsyncThunk('newUser/fetchAsyncUser', async () =>{
	const response = await UserApi.get();
	return response.data;
})


const userSlice = createSlice({
	name: "newUser",
	initialState: {
		newUser: {},
	},
	reducers: {
		addUser(state, action) {
			state.newUser = action.payload;
		},
	}, 
	extraReducers: {
		[fetchAsyncUser.pending]: ()=>{
			console.log("pending")
		},
		[fetchAsyncUser.fulfilled]:(state , {payload})=>{
			console.log("fullfiled")
			return {...state, newUser:payload}
		},
		[fetchAsyncUser.rejected]:()=>{
			console.log("Rejected");
		}
	}
});
export const userActions = userSlice.actions;
export default userSlice;
