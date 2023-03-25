import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {updateStatusAction,fetchName} from  "../actions"


const Profile = () => {
const {name,age,status,email}=useSelector((state)=>state.user)

const dispatch = useDispatch()


const updateStatus=(status)=>{
    dispatch(updateStatusAction(status))
}

const updateAge=()=>{
    dispatch({
        type:"UPDATE_AGE",       
    })
}

const updateName=async ()=>{
       dispatch({
        type:"UPDATE_NAME",       
       })
}
  return (
    <div>
      <h1>i am {name}</h1>
      <h2>I Am A  {email}</h2>
      <h2>My Age Is {age}</h2>
      <h2>I Am A  {status}</h2>
      <button onClick={()=>updateName()}>Change Name</button>
      <button onClick={()=>updateStatus("Designer")}>Change status</button>
      <button onClick={()=>updateAge()}>Change Age</button>
    </div>
  )
}

export default Profile
