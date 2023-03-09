import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, incrementByValue } from './Reducers'
function Home() {
  const dispatch = useDispatch();
  const { c } = useSelector((state) => state.custom);

  const addBtn = () => {
    dispatch({
      type: "increment",
    });
  };
  const subBtn = () => {
    dispatch({
      type: "decrement",
    });
  };
  const addBtnByValue = () => {
    dispatch({
      type: "incrementByValue",
      payload: 25,
    });
  };

  const reset = () => {
    dispatch({
      type: "reset",
    });
  };
  return (
    <div>
      <h2>{c}</h2>
      <button onClick={addBtn}>Increment</button>
      <button onClick={addBtnByValue}>Increment By Value</button>
      <button onClick={subBtn}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Home;
