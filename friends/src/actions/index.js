import axios from 'axios'

// Friends action types
export const GET_FRIENDS_START = 'GET_FRIENDS_START'
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
export const GET_FRIENDS_FAILED = 'GET_FRIENDS_FAILED'

// Login action types
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

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
