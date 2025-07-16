import React from 'react'

const Home = (props) => {


  return (
    <div>
      <h1 className='text-center'>Home</h1>

      <p>{props.myName}</p>
    </div>
  )
}

export default Home
