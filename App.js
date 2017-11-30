import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Navigator } from 'react-native';
import Login from './src/components/Login/Login';


export default class App extends React.Component {

  render() {
    return (

    <Login />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mediumaquamarine',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
