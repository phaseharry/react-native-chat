import React from 'react'
import { FlatList, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
 
class Messages extends React.Component{
  render(){
    const { messages } = this.props
    return (
      <ScrollView>
         <FlatList 
          data={messages} 
          renderItem={({ item }) => <Text>{ item.message }</Text> }
          keyExtractor={ (item) => item.message}
          />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, null)(Messages)