import React from 'react'
import { Text } from 'react-native'

class Message extends React.Component{
  render(){
    const { message, author, id } = this.props
    return (
        <Text>{message} by {author.firstName}</Text>
  )
  }
}

export default Message