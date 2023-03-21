import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Reducer";

export const Store = configureStore({
    reducer:{
        counter:counterReducer
    }
})