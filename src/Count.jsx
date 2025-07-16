import React, { useState } from 'react'

const Count = () => {

    const [count,setCount] = useState(1)

    function increment(){
        
       setCount(count+1)
        
    }

    
  return (
    <div>
      <p className='m-5'>Count : {count}</p>

      <button onClick={increment} className='border bg-green-500 text-white p-2 m-2 rounded-2xl'>Increment</button>
      <button onClick={()=>setCount(count-1)} className='border bg-blue-500 text-white p-2 m-2 rounded-2xl'>Decrement</button>
      <button onClick={()=>setCount(0)} className='border bg-red-500 text-white p-2 m-2 rounded-2xl'>Reset</button>

      
    </div>
  )
}

export default Count
