import {
  GET_FRIENDS_START,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILED,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT
} from '../actions'

const initialState = {
  friends: [],
  isLoading: false,
  errorMessage: null,
  isLoggedIn: false
}

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET_FRIENDS ==========================================|
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
        friends: action.payload,
        isLoggedIn: true
      }
    }
    case GET_FRIENDS_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    }
    // ADD_FRIEND ===========================================|
    case ADD_FRIEND_START: {
      return {
        ...state,
        isLoading: true
      }
    }
    case ADD_FRIEND_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errorMessage: null
      }
    }
    case ADD_FRIEND_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    }
    // LOGIN ================================================|
    case LOGIN_START: {
      return {
        ...state,
        isLoading: true
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        isLoggedIn: true
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        isLoggedIn: false
      }
    }
    case LOGOUT: {
      localStorage.removeItem('token')

      return {
        ...state,
        isLoggedIn: false
      }
    }
    default:
      return state
  }
}
