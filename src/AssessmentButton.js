import React from 'react'

const AssessmentButton = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='text-white font-bold rounded-md bg-steel-blue-700 border border-white transition-all duration-700 ease-in-out hover:bg-white hover:text-black aspect-w-1 aspect-h-1 px-6 py-8'
    >
      {title}
    </button>
  )
}

export default AssessmentButton
