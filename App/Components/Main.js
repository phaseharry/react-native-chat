import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native';
import { connect } from 'react-redux'
import { loadMessages } from '../store/messages'

import Messages from './Messages'
import TextBox from './TextBox.js'

class Main extends React.Component{
  componentDidMount(){
    return this.props.getMessages()
  }
  render(){
    return (
        <View contentContainerStyle={styles.container}>
          <Messages/>
          <TextBox />
        </View>
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

const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => dispatch(loadMessages())
  }
}

export default connect(null, mapDispatchToProps)(Main)