import React, { useState } from 'react'

const CounterApp = () => {
  const [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1);
  }
  function dnc() {
    setCount(count - 1);
  }
  return (
    <div style={{border:'5px solid red', borderRadius:10, padding:20}}>
        <h1 style={{colour: 'yellow'}}>COUNTER APP</h1>
        <br/>
        <button onClick={inc} style={{backgroundColor: 'green', color: 'white', padding: '10px 20px', fontSize: '16px'}}>Increment</button>
        <span style={{ fontSize: '24px', padding: 20 }}>{count}</span>
        <button onClick={dnc} style={{backgroundColor: 'red', color: 'white', padding: '10px 20px', fontSize: '16px'}}>Decrement</button>
    </div>
  )
}


export default CounterApp