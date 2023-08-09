import React from 'react'



const FunA = (props) => {

  const {firstName, lastName} = props
  return (
    <>
        <h2 >I am Function A   </h2>
        <h3> First Name : {firstName}</h3>
        <h3> Last Name : {lastName}</h3>
        <h1>Hello World</h1>

    </>
  )
}

export default FunA