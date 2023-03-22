import {createSlice} from "@reduxjs/toolkit";

const initialState={
    name:"Abhisek",
    age:20,
    status:"Web Developer"
}

export const userReducer =  createSlice({
    name :"person",
    initialState,
    reducers:{
        updateName(state,action){
            state.name=action.payload
        },
        updateAge(state,action){
            state.age=action.payload
        },
        updateStatus(state,action){
            state.status=action.payload
        }
    }
})

export const {updateName,updateAge,updateStatus} = userReducer.actions
export default userReducer.reducer