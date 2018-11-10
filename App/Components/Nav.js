import React from 'react'
import { View, Button } from 'react-native'

class NavBar extends React.Component {
  render(){
    return (
      <View>
        <Button title='Log in' onPress={() => this.props.navigation.navigate('LogIn')}></Button>
      </View>
    )
  }
}

export default NavBar