import axios from 'axios'

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