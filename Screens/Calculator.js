import React from 'react';
import { StyleSheet, Text, Keyboard, View, Button, TextInput } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result:'',
      num1:'',
      num2:'',
      sign:'',
      data:[]
    }
  }

  onAdd=()=>{
    var number1=Number(this.state.num1);
    var number2=Number(this.state.num2);
    var add=number1+number2;
    Keyboard.dismiss();
    this.setState({
      result: add,
      data:[...this.state.data,
        {id:Math.random(),
        num1:this.state.num1,
        num2:this.state.num2,
        sign:'+',
        result:add}
      ]
    });
  }

  onMinus=()=>{
    var number1=Number(this.state.num1);
    var number2=Number(this.state.num2);
    var minus=number1-number2;
    Keyboard.dismiss();
    this.setState({
      result: minus,
      data:[...this.state.data,
        {id:Math.random(),
        num1:this.state.num1,
        num2:this.state.num2,
        sign:'-',
        result:minus}
      ]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Exercise 5: Calculator with Navigation</Text>
        <Text style={styles.headerText}>Result :{this.state.result}</Text>

        <TextInput
        keyboardType='number-pad'
        style={styles.TextInput}
        onChangeText={(number)=>this.setState({
          num1:number
        })}
        value={this.state.num1}
        />

        <TextInput
        keyboardType='number-pad'
        style={styles.TextInput}
        onChangeText={(number)=>this.setState({
          num2:number
        })}
        value={this.state.num2}
        />

        <Button
        onPress={this.onAdd}
        title='+'></Button>
        <Button
        onPress={this.onMinus}
        title="-"></Button>
        <Button onPress={()=>this.props.navigation.navigate('History', {data: this.state.data})} title='History'></Button> 
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
  TextInput: {
    width:300,
    height:30,
    borderColor:'black',
    borderWidth:2,
    marginBottom:4
  },
  headerText: {
    fontSize: 26
  }
});
