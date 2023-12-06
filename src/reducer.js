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

export default reducer
