import React, { useEffect, useState } from 'react'

const Effect = () => {

    const [value,setValue] = useState(1)

    const [value1,setValue1] = useState(1)

    useEffect(()=>{
        document.title=`value:${value}::::::${value1}`
    },[value1])

    // useEffect(()=>{}) every render

    // useEffect(()=>{},[]) only one time render

    // useEffect(()=>{},[a]) value change
  return (
    <div className='text-center'>
      <button className=' border p-2 m-5 rounded-xl bg-cyan-600 text-white hover:bg-amber-400' 
      onClick={()=>setValue(value+1)}>Click</button>

      <button className=' border p-2 m-5 rounded-xl bg-cyan-600 text-white hover:bg-amber-400' 
      onClick={()=>setValue1(value1+1)}>Value 1</button>
    </div>
  )
}

export default Effect
