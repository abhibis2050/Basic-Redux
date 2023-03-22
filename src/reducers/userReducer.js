import { createReducer } from "@reduxjs/toolkit";
import { updateStatusAction } from "../actions";

const initialState={
    name:"Abhisek",
    age:20,
    status:"Web Developer"
}

export default createReducer(initialState,(builder)=>{

    // builder.addCase("UPDATE_STATUS",(state,action)=>{
    //     state.status=action.payload
    // })

    builder.addCase("UPDATE_AGE",(state,action)=>{
        state.age=action.payload
    })

    //reusing the component of action 
    builder.addCase(updateStatusAction,(state,action)=>{
        state.status=action.payload
    })

    
    builder.addCase("UPDATE_NAME",(state,action)=>{
        state.name=action.payload
    })
})