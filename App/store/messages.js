import axios from 'axios'
import socket from '../socket'

//action types 
const LOAD_MESSAGES = 'LOAD_MESSAGES'
const WRITE_MESSAGE = 'WRITE_MESSAGE'

//action creators
export const _loadMessages = messages => ({ type: LOAD_MESSAGES, messages })

export const _writeMessage = post => ({ type: WRITE_MESSAGE, post })

//thunks
export const loadMessages = () => {
  return dispatch => {
    return axios.get('https://voice21.herokuapp.com/api/messages/')
    .then(response => response.data)
    .then(messages => {
      dispatch(_loadMessages(messages))})
    .catch((err) => console.log(err))
  }
}

export const postMessage = (message) => {
  return async dispatch => {
    try {
      const response = await axios.post('https://voice21.herokuapp.com/api/messages/', { message })
      dispatch(_writeMessage(response.data))
      socket.emit('new-message', response.data)
    } catch(err){
      console.log(err)
    }
  }
}


const messagesReducer = (state= [], action) => {
  switch(action.type){
    case WRITE_MESSAGE:
      return [...state, action.post]
    case LOAD_MESSAGES:
      return action.messages
    default:
      return state
  }
}

export default messagesReducer