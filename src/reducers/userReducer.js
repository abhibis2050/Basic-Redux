import { createReducer } from "@reduxjs/toolkit";
import { updateStatusAction } from "../actions";

const initialState={
    name:"avi",
    age:20,
    status:"Web Developer",
    email:""
}

export default createReducer(initialState,(builder)=>{

    // builder.addCase("UPDATE_STATUS",(state,action)=>{
    //     state.status=action.payload
    // })

    // builder.addCase("UPDATE_AGE",(state,action)=>{
    //     state.age=action.payload
    // })

    //reusing the component of action 
    builder.addCase(updateStatusAction,(state,action)=>{
        state.status=action.payload
    })

    
    // builder.addCase("UPDATE_NAME",(state,action)=>{
    //     state.name=action.payload
    // })

    //Saga 
    builder.addCase("UPLOAD_NAME_SUCCESS",(state,action)=>{
        state.name=action.payload
    })

    builder.addCase("UPLOAD_AGE_SUCCESS",(state,action)=>{
        state.age=action.payload
    })
}) 