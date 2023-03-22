import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const initialState={
    name:"Abhisek",
    age:20,
    status:"Web Developer"
}



export const fetchUserName = createAsyncThunk(
    'getUserName',
    async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const response = await res.json()
        const name2 = response[0].name
        return name2
    }
   
  )

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