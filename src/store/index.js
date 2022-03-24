import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../store/UserProfileCardSlice"

const store = configureStore({reducer : {UserProfileCard : cardSlice.reducer}})
export default store;