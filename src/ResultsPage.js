import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ResultsPage = ({ userName }) => {
  const userResponses = useSelector((state) => state.userResponses)

  return (
    <div className='results-container'>
      <h1 className='text-3xl font-bold mb-6 mt-5'>Results for {userName}</h1>

      <div className='user-responses'>
        <h2 className='text-xl font-bold mb-3'>User Responses:</h2>
        <p>Welcome {userName}</p>
        <ul>
          {userResponses.map((response, index) => (
            <li key={index}>
              <p>
                <strong>Question {index + 1}:</strong> {response}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Additional content or formatting for the results page */}
    </div>
  )
}

export default ResultsPage
