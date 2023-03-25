import { createSlice } from "@reduxjs/toolkit";

const initialState={
    jokes:""
}


export const jokeReducer = createSlice({
    name:"jokes",
    initialState,
    reducers:{
        
    }
})




export default jokeReducer.reducer