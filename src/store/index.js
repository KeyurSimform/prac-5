import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../store/UserProfileCardSlice"

const store = configureStore({reducer : {UserProfileCard : cardSlice.reducer}})
export default store;


// Here the store is configured and exported as default so it can be used any componenet