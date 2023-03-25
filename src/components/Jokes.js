import React from 'react'
import { useDispatch,useSelector } from 'react-redux'


const Jokes = () => {
    const dispatch = useDispatch()

    const jokes = ()=>{
        dispatch({type:"getJokes"})
    }
    
    
  return (
    <div>
      <button onClick={()=>jokes()}>Jokes</button>
    </div>
  )
}

export default Jokes
