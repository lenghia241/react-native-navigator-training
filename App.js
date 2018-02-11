import React from 'react';
import { StyleSheet, Text, View , AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Calculator from './Screens/Calculator';
import History from './Screens/History';

export default class App extends React.Component {

  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator({
  Calculator: {screen: Calculator},
  History: {screen: History}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
