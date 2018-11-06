import React from 'react'
import { Text, View } from 'react-native'

class Message extends React.Component{
  render(){
    const { message, author, id } = this.props
    return (
      <View>
        <Text>{message}</Text>
        <Text>{author? author.firstName : 'Anonymous User'}</Text>
      </View>
  )
  }
}

export default Message