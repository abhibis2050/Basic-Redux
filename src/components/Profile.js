import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

const Profile = () => {
const {name,age,status}=useSelector((state)=>state.user)
const dispatch = useDispatch()


const updateStatus=(status)=>{
    dispatch({
        type:"UPDATE_STATUS",
        payload:status
    })
}
  return (
    <div>
      <h1>i am {name}</h1>
      <h2>My Age Is {age}</h2>
      <h2>I Am A  {status}</h2>
      <button onClick={()=>updateStatus("Designer")}>Change status</button>
    </div>
  )
}

export default Profile
