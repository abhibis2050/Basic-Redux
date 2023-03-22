import { createReducer, createSlice } from "@reduxjs/toolkit";

const initialState={
    name:"Abhisek",
    age:20,
    status:"Web Developer"
}

export default createReducer(initialState,(builder)=>{
    builder.addCase("UPDATE_STATUS",(state,action)=>{
        state.status=action.payload
    })
})