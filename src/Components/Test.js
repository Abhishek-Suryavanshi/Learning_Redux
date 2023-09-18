import React from 'react'
import { increment, decrement, incrementBy25, add20 } from '../Redux/Counter';
import { useDispatch, useSelector } from 'react-redux';

const Test = () => {
  // console.log(useSelector((state) => state));
  const { count,products } = useSelector((state) => state.mycounter);
  const mydispatch = useDispatch();

  return (
    <div>
      {count}<br />
      {products}<br />
      <button onClick={() => mydispatch(increment())}>Increment by 1</button>&nbsp;
      <button onClick={() => mydispatch(decrement())}>Decrement by 1</button>&nbsp;
      <button onClick={() => mydispatch(incrementBy25())}>increment by 25</button>
      <button onClick={() => mydispatch(add20())}>Array</button>
    </div>
  )
}

export default Test