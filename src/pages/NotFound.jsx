import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center align-center mt-[120px]'>
        <p className='font-black'>404</p>
        <p>Page not found</p>
        <p className='mt-[20px]'>Go back to<Link to='/' className='text-blue-800 font-black'> Home</Link>.</p>
    </div>
  )
}

export default NotFound