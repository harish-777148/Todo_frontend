import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-amber-600 w-full h-20 flex items-center justify-center'>
      <ul className='flex justify-around items-center gap-6 m-5'>
          <li className='hover:text-white'>
            <Link to="/">Home</Link>
          </li>
          <li className='hover:text-white'>
            <Link to="/count">Count</Link>
          </li>
          <li className='hover:text-white'>
            <Link to="/object">Object</Link>
          </li>
          <li className='hover:text-white'>
            <Link to="/todo">Todo</Link>
          </li>
          <li className='hover:text-white'>
            <Link to="/effect">Effect</Link>
          </li>
          <li className='hover:text-white'>
            <Link to="/clock">Clock</Link>
          </li>
        </ul>
    </div>
  )
}

export default Header
