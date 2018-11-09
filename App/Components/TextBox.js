import React from 'react'
import { View , TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { postMessage } from '../store/messages'
 
class TextBox extends React.Component{
  constructor(){
    super()
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(text){
    this.setState({text})
  }
  handleSubmit(){
    const { postMessage } = this.props
    const { text } = this.state
    return postMessage(text)
    .then(() => this.setState({text: ''}))
  }
  render(){
    const { handleChange, handleSubmit } = this
    const { text } = this.state
    return (
      <View>
        <TextInput placeholder='Type your heart out...' value={text} onChangeText={(text) => handleChange(text)}></TextInput>
        <Button onPress={handleSubmit} title='Send' disabled={text? false : true}></Button>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postMessage: (message) => dispatch(postMessage(message))
  }
}

export default connect(null, mapDispatchToProps)(TextBox)