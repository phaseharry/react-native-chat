import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native';
import { connect } from 'react-redux'
import { createStackNavigator } from 'react-navigation'

import { loadMessages } from '../store/messages'
import Messages from './Messages'
import TextBox from './TextBox.js'
import LogIn from './LogIn'
import Nav from './Nav'

class Home extends React.Component{
  componentDidMount(){
    return this.props.getMessages()
  }
  render(){
    const { navigation } = this.props
    return (
        <View contentContainerStyle={styles.container}>
          <Nav navigation={navigation}/>
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

const HomeScreen = connect(null, mapDispatchToProps)(Home)

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  LogIn: {
    screen: LogIn
  }
}, { initialRouteName: 'Home'})