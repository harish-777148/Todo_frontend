import React, { useState } from 'react'

const Object = () => {
    const [car, setCar] = useState([1,2,3,4,5,5]);

  const updateColor = () => {
    setCar(prev => {
      return { ...prev, color: "Blue" }
    });
  }

 
  return (
    <div>
      <p>{car.brand}</p>
      <p>{car.model}</p>
      <p>{car.year}</p>
      <p>{car.color}</p>

      <ul>
        {car.map((cars,index )=> 
        (<li key={index}>{cars}</li>)
        )}
      </ul>

    <button className='border bg-red-400 m-2 p-2 rounded-xl hover:bg-amber-400' onClick={updateColor}>Color</button>

    <button className='border bg-red-400 m-2 p-2 rounded-xl hover:bg-amber-400'>SetTimeout</button>

    </div>
  )
}

export default Object
