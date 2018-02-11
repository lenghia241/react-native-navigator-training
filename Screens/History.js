import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:props.navigation.state.params.data
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>History</Text>
        <FlatList 
          style={styles.history}
          data={this.state.data}
          renderItem={({item},index)=>
        <Text key={index}>{item.num1} {item.sign} {item.num2} = {item.result}</Text>}
          keyExtractor={({id})=>id}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 26
  }
});
