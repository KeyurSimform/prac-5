import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name : 'UserProfileCard',
    initialState : {
        User : null,
    },
    reducers : {
        setUser(state,action){
            
            state.User = action.payload
            
        },
        removeUser(state){
            state.User = null
        }
    }
})
export const cardActions = cardSlice.actions
export default cardSlice