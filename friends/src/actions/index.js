import axios from 'axios'

// ACTION TYPES ================================================|
//==============================================================|
// Friends action types
export const GET_FRIENDS_START = 'GET_FRIENDS_START'
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
export const GET_FRIENDS_FAILED = 'GET_FRIENDS_FAILED'
export const ADD_FRIEND_START = 'ADD_FRIEND_START'
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS'
export const ADD_FRIEND_FAILED = 'ADD_FRIEND_FAILED'
export const UPDATE_FRIEND_START = 'UPDATE_FRIEND_START'
export const UPDATE_FRIEND_SUCCESS = 'UPDATE_FRIEND_SUCCESS'
export const UPDATE_FRIEND_FAILED = 'UPDATE_FRIEND_FAILED'
export const DELETE_FRIEND_START = 'DELETE_FRIEND_START'
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS'
export const DELETE_FRIEND_FAILED = 'DELETE_FRIEND_FAILED'

//==============================================================|
// Login/Logout action types
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT = 'LOGOUT'

// ACTION CREATORS =============================================|
//==============================================================|
// getFriends() - Populate list of friends
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

//==============================================================|
// addFriend() - Add a friend to list of friends by passing a
// friend obj to the API
export function addFriend(friend) {
  return dispatch => {
    dispatch({ type: ADD_FRIEND_START })

    const headers = {
      Authorization: localStorage.getItem('token')
    }

    return axios
      .post('http://localhost:5000/api/friends', friend, {
        headers
      })
      .then(res => {
        dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data })
      })
      .catch(err => {
        const payload = err.response ? err.response.data : err
        dispatch({ type: ADD_FRIEND_FAILED, payload })
      })
  }
}

//==============================================================|
// updateFriend() - Update friend's data
export function updateFriend(friend) {
  return dispatch => {
    dispatch({ type: UPDATE_FRIEND_START })

    const headers = {
      Authorization: localStorage.getItem('token')
    }

    return axios
      .put(`http://localhost:5000/api/friends/${friend.id}`, friend, {
        headers
      })
      .then(res => {
        dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: res.data })
      })
      .catch(err => {
        const payload = err.response ? err.response.data : err
        dispatch({ type: UPDATE_FRIEND_FAILED, payload })
      })
  }
}

//==============================================================|
// deleteFriend() - Remove friend from the list
export function deleteFriend(id) {
  return dispatch => {
    dispatch({ type: DELETE_FRIEND_START })

    const headers = {
      Authorization: localStorage.getItem('token')
    }

    return axios
      .delete(`http://localhost:5000/api/friends/${id}`, {
        headers
      })
      .then(res => {
        console.log(res.data)
        dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data })
      })
      .catch(err => {
        const payload = err.response ? err.response.data : err
        dispatch({ type: DELETE_FRIEND_FAILED, payload })
      })
  }
}

//==============================================================|
// login(username, password) - Login - sets an authorization
// token to local storage from the API
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

//==============================================================|
// logout() - Logout - removes token from localStorage
export function logout() {
  return {
    type: LOGOUT
  }
}
