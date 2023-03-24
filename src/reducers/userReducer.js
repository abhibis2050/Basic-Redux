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
        const name2 = response[Math.floor(Math.random()*10)].name
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
            // console.log(action.payload.status);
            state.status=action.payload.status
        }
    },
    extraReducers:(builder)=>{
       builder.addCase( fetchUserName.fulfilled,(state,action)=>{
        state.name=action.payload
       }
    )
    builder.addCase( fetchUserName.pending,(state,action)=>{
        state.name="Loading!!"
       }
    )

    builder.addCase( fetchUserName.rejected,(state,action)=>{
        state.name="Rejected!!"
       }
    )
    }
})

export const {updateName,updateAge,updateStatus} = userReducer.actions
export default userReducer.reducer