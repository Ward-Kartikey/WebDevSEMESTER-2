import React from 'react'

const card = (props) => {
  return (
    <div style={{border: '7px solid white', width: '50', height: '25' , backgroundColor: 'purple', textAlign: 'center', textColor: 'blue'}}>
        <h1>Student Record :</h1>
        <h1>NAME :{props.name}</h1>
        <h1>CLASS :{props.class}</h1>
        <h1>ROLL NO. :{props.rollno}</h1>
    </div>
  )
}


export default card