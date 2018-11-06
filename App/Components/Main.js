import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { loadMessages } from '../store/messages'

import Message from './IndividualMessage'
import TextBox from './TextBox.js'

class Main extends React.Component{
  componentDidMount(){
    return this.props.getMessages()
  }
  render(){
    const { messages } = this.props
    return (
      <ScrollView contentContainerStyle={styles.container}>
      {
        messages.map(message => {
          return <Message key={message.id} message={message.message} author={message.user}/>
          
        })
      }
      <TextBox />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
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