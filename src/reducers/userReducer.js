import {createSlice} from "@reduxjs/toolkit";
import { updateStatusAction } from "../actions";

const initialState={
    name:"Abhisek",
    age:20,
    status:"Web Developer"
}

export const userReducer =  createSlice({
    name :"person",
    initialState,
    reducers:{
        UPDATE_NAME(state,action){
            state.name=action.payload
        },
        UPDATE_AGE(state,action){
            state.age=action.payload
        },
        UPDATE_STATUS(state,action){
            state.status=action.payload
        }
    }
})

export const {UPDATE_NAME,UPDATE_AGE,UPDATE_STATUS} = userReducer.actions
export default userReducer.reducer