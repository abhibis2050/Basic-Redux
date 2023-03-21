import { createSlice } from "@reduxjs/toolkit"; 

const initialState={
    c:0
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.c+=1
        },
        decrement:(state)=>{
            state.c-=1
        },
        incrementByAmount:(state,action)=>{
            
            state.c=state.c+action.payload
        },
        reset:(state)=>{
            state.c=0
        },
    }
})


export const {increment,decrement,incrementByAmount,reset} = counterSlice.actions
export default counterSlice.reducer
