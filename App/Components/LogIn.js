import React from 'react'
import { View, TextInput, Button } from 'react-native'

class LogIn extends React.Component{
  constructor(){
    super()
    this.state = {
      email: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(email){
    this.setState({email})
  }
  handleSubmit(){

  }
  render(){
    const { handleChange, handleSubmit } = this
    const { email } = this.state
    return (
      <View>
        <TextInput placeholder='Email' value={email} onChangeText={(email) => handleChange(email)}></TextInput>
        <Button onPress={handleSubmit} title='Sign in' disabled={email? false : true}></Button>
      </View>
    )
  }
}

 export default LogIn