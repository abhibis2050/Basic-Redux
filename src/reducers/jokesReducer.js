import { createSlice } from "@reduxjs/toolkit";

const initialState={
    jokes:""
}


export const jokeReducer = createSlice({
    name:"jokes",
    initialState,
    reducers:{
        updateJokes:(state,action)=>{
            console.log(action.payload);
            state.jokes=action.payload
        }
    }
})



export const {updateJokes} = jokeReducer.actions
export default jokeReducer.reducer