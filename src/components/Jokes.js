import React from 'react'
import { useDispatch,useSelector } from 'react-redux'


const Jokes = () => {
  const{jokes}=useSelector((state)=>{
    console.log(state);
    return state.jokes
  }
  )
 
    const dispatch = useDispatch()

    const getjokes = ()=>{
        dispatch({type:"ADD_JOKES"})
    }
    
    
  return (
    <div>
      <h2>Todays Joke ----{jokes}</h2>
      <button onClick={()=>getjokes()}>Jokes</button>
    </div>
  )
}

export default Jokes
