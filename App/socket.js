import io from 'socket.io-client'
import store from './store'
import {_writeMessage } from './store/messages'

const socket = io('https://voice21.herokuapp.com/')

socket.on('connect', () => {
  console.log(socket.id)
  socket.on('new-message', message => {
    store.dispatch(_writeMessage(message))
  })
})

export default socket