import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Assessment3 = () => {
  const [userResponses, setUserResponses] = useState(
    JSON.parse(localStorage.getItem('userResponses')) || {}
  )
  const { id } = useParams()
  console.log('Assessment ID:', id) // Get the assessment ID from URL
  const navigate = useNavigate()

  const [userName, setUserName] = useState('')
  const [assessmentStarted, setAssessmentStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const questions = [
    'Question 1 for Assessment 3?',
    'Question 2 for Assessment 3?',
  ]

  const handleStartAssessment = () => {
    setAssessmentStarted(true)
  }

  const handleResponse = (response) => {
    const updatedResponses = [...userResponses]
    updatedResponses[currentQuestionIndex] = response
    setUserResponses(updatedResponses)

    // Move to the next question after a response is recorded
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const handleSubmit = () => {
    dispatch({
      type: 'SET_USER_RESPONSES',
      userResponses,
    })
    navigate(`/results/${userName}`)
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen text-white mt-16'>
      <Link to='/' className='absolute top-10 left-0 p-9'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Back to Home
        </button>
      </Link>
      <h1 className='text-3xl font-bold mb-6 mt-5'>Assessment {id}</h1>
      <div className='flex flex-col h-screen mt-40'>
        {!assessmentStarted ? (
          <div className='flex flex-col items-center'>
            <p className='flex text-2xl mb-5'>
              Enter your name to start the assessment
            </p>
            <input
              type='text'
              placeholder='Enter your name'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className='mb-4 px-4 py-2 border border-gray-400 rounded'
              style={{ color: 'black' }} // Set text color to black
            />
            <button
              onClick={handleStartAssessment}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              disabled={userName.length < 4} // Disable the button if userName length is less than 4
            >
              Start Assessment
            </button>
          </div>
        ) : (
          <>
            {currentQuestionIndex < questions.length ? (
              <div className='flex flex-col items-center'>
                <p className='text-xl'>{questions[currentQuestionIndex]}</p>
                <div className='mt-4'>
                  <button
                    onClick={() => handleResponse('A')}
                    className='mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                  >
                    Agree
                  </button>
                  <button
                    onClick={() => handleResponse('D')}
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                  >
                    Disagree
                  </button>
                </div>
              </div>
            ) : (
              <div className='flex flex-col items-center'>
                <p>Assessment Completed!</p>
                <button
                  onClick={handleSubmit}
                  className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                  Submit
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Assessment3
