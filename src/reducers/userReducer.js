import {createSlice} from "@reduxjs/toolkit";
import { updateStatusAction } from "../actions";

const initialState={
    name:"Abhisek",
    age:20,
    status:"Web Developer"
}

export default createSlice({
    name :"person",
    initialState,
    reducers:{
        
    }
})