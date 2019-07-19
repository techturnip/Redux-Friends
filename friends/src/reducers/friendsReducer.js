import {
  GET_FRIENDS_START,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '../actions'

const initialState = {
  friends: [],
  isLoading: false,
  errorMessage: null,
  isLoggedIn: false
}

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS_START: {
      console.log(state)
      return {
        ...state,
        isLoading: true
      }
    }
    case GET_FRIENDS_SUCCESS: {
      console.log(state)
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        friends: action.payload
      }
    }
    case GET_FRIENDS_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    }
    case LOGIN_START: {
      return {
        ...state
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state
      }
    }
    default:
      return state
  }
}
