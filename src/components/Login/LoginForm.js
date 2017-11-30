import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, TouchableOpacity } from 'react-native';

export default class LoginForm extends Component {

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          placeholder="Username or Email"
          placeholderTextColor="rgba(0,0,0,0.5)"
          returnKeyType= "next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType = 'email-address'
          style={styles.input}
         />

        <TextInput placeholder="Password"
          placeholderTextColor="rgba(0,0,0,0.5)"
          secureTextEntry
          returnKeyType= "go"
          style={styles.input}
          ref={(input) => this.passwordInput = input}
         />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginBottom: 25,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: 'rgb(18, 130, 44)',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
});
