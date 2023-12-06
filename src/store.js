import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

const initialState = {
  userResponses: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_RESPONSES':
      return {
        ...state,
        userResponses: action.userResponses,
      }
    default:
      return state
  }
}

const store = configureStore(reducer)

export default store
