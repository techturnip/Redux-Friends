import {
  GET_FRIENDS_START,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILED,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILED,
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
    case ADD_FRIEND_START: {
      return {
        ...state,
        isLoading: true
      }
    }
    case ADD_FRIEND_SUCCESS: {
      // const withNewFriend = state.friends.concat(action.payload)
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
        errorMessage: null
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    }
    default:
      return state
  }
}
