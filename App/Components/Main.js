import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { loadMessages } from '../store/messages'

import Message from './IndividualMessage'

class Main extends React.Component{
  componentDidMount(){
    return this.props.getMessages()
  }
  // componentDidUpdate(prevProps){
  //   console.log(this.props)
  //   console.log(prevProps)
  // }
  render(){
    const { messages } = this.props
    return (
      <View style={styles.container}>
      {
        messages.map(message => {
          // console.log(message)
          return <Message key={message.id} message={message.message} author={message.user}/>
          
        })
      }
        <Text>Hed!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => dispatch(loadMessages())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)