import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { connect } from 'react-redux'
 
class Messages extends React.Component{
  render(){
    const { messages } = this.props
    return (
      <View>
         <FlatList 
          data={messages} 
          renderItem={({ item }) => <Text>{ item.message }</Text> }
          keyExtractor={ (item) => item.id }
          />
      </View>
    )
  }
}
 <FlatList
data={[
  {key: 'Devin'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
]}
renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
/> 

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, null)(Messages)