import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, Image, KeyboardAvoidingView, Navigator } from 'react-native';


export default class Login extends Component {

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../images/treelogo.jpg')} />
          <Text style={styles.title}>An app used to find and locate the right tree.</Text>
        </View>
        <View style={styles.formContainer}>

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
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    padding: 20
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  title: {
    color: '#fff',
    marginTop: 10,
    width: 130,
    textAlign: 'center'
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
    marginBottom: 30
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
});
