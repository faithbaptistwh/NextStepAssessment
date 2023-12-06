// HomePage.js
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold mb-6 text-white'>
        Select Your Assessment
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <Link to='/assessment/3'>
          <button className='text-white font-bold rounded-md bg-steel-blue-700 border border-white transition-all duration-700 ease-in-out hover:bg-white hover:text-black aspect-w-1 aspect-h-1 px-6 py-8'>
            Start Assessment 3
          </button>
        </Link>
        {/* Add buttons for other assessments as needed */}
      </div>
    </div>
  )
}

export default HomePage
