import axios from 'axios'

// Friends action types
export const GET_FRIENDS_START = 'GET_FRIENDS_START'
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
export const GET_FRIENDS_FAILED = 'GET_FRIENDS_FAILED'
export const ADD_FRIEND_START = 'ADD_FRIEND_START'
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS'
export const ADD_FRIEND_FAILED = 'ADD_FRIEND_FAILED'

// Login action types
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

// Function to not have to keep fetching token from local storage
function axiosAuth() {
  const token = localStorage.getItem('token')

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`
    }
  })
}

export function getFriends() {
  return dispatch => {
    dispatch({ type: GET_FRIENDS_START })

    const headers = {
      Authorization: localStorage.getItem('token')
    }

    axios
      .get('http://localhost:5000/api/friends', { headers })
      .then(res => {
        dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data })
      })
      .catch(err => {
        const payload = err.response ? err.response.data : err
        dispatch({ type: GET_FRIENDS_FAILED, payload })
      })
  }
}

export function addFriend(friend) {
  console.log(friend)
  return dispatch => {
    dispatch({ type: ADD_FRIEND_START })

    const headers = {
      Authorization: localStorage.getItem('token')
    }

    console.log(headers)
    return axiosAuth()
      .post('http://localhost:5000/api/friends', friend)
      .then(res => {
        dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data })
      })
      .catch(err => {
        const payload = err.response ? err.response.data : err
        dispatch({ type: ADD_FRIEND_FAILED, payload })
      })
  }
}

export function login(username, password) {
  return dispatch => {
    dispatch({ type: LOGIN_START })

    return axios
      .post('http://localhost:5000/api/login', { username, password })
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
      })
      .catch(err => {
        const payload = err.response ? err.response.data : err
        dispatch({ type: LOGIN_FAILED, payload })
      })
  }
}
