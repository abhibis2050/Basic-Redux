import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchUserName, updateAge, updateName, updateStatus } from '../reducers/userReducer'


const Profile = () => {
const {name,age,status}=useSelector((state)=>state.user)
const dispatch = useDispatch()

const changeName=async(name)=>{
  

  dispatch(fetchUserName())
}



  return (
    <div>
      <h1>i am {name}</h1>
      <h2>My Age Is {age}</h2>
      <h2>I Am A  {status}</h2>
      <button onClick={()=>changeName("Rahul")}>Change Name</button>
      <button onClick={()=>dispatch(updateStatus("Graphic Desighner"))}>Change status</button>
      <button onClick={()=>dispatch(updateAge(26))}>Change Age</button>
    </div>
  )
}

export default Profile
