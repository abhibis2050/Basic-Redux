
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './Reducer'

const Home = () => {
  const value = useSelector((state)=>state.counter.c)
const dispatch = useDispatch()

  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>{dispatch(increment())}}>increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        <button onClick={()=>{dispatch(incrementByAmount(10))}}>Increase By Value</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
  )
}

export default Home