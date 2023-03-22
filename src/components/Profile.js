import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {updateStatusAction} from  "../actions"


const Profile = () => {
const {name,age,status}=useSelector((state)=>state.user)
const dispatch = useDispatch()


const updateStatus=(status)=>{
    dispatch(updateStatusAction(status))
}

const updateAge=(age)=>{
    dispatch({
        type:"UPDATE_AGE",
        payload:age
    })
}

const updateName=async ()=>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/users")
//     const result = await res.json()
//    const name =  result[0].name
   
//     dispatch({
//         type:"UPDATE_Name",
//         payload:name
//     })
}
  return (
    <div>
      <h1>i am {name}</h1>
      {/* <h2>My Age Is {age}</h2> */}
      {/* <h2>I Am A  {status}</h2> */}
      <button onClick={()=>updateName()}>Change Name</button>
      <button onClick={()=>updateStatus("Designer")}>Change status</button>
      <button onClick={()=>updateAge(30)}>Change Age</button>
    </div>
  )
}

export default Profile
