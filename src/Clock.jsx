import React, { useEffect, useState } from 'react'

const Clock = () => {

    const [clock,setClock] = useState(0)


    useEffect(() => {
    
    const interval = setInterval(() => {
      setClock(clock+ 1); 
    }, 1000);

    
    return () => clearInterval(interval);
  });

  return (
    <div>
      <button className='border w-100 h-100 m-40 rounded-full bg-sky-400 text-white text-9xl'>{clock}</button>
    </div>
  )
}

export default Clock
