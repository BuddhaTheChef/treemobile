import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, Image, KeyboardAvoidingView, Navigator } from 'react-native';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <Text>This is another page after the home page</Text>

      <TouchableOpacity onPress={() => navigation.navigate('NewPage')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Find Trees</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Create')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Create Project</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    padding: 20,
    justifyContent: 'center'
  },
  buttonContainer: {
    backgroundColor: 'rgb(18, 130, 44)',
    paddingVertical: 15,
    marginBottom: 30,
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }

});
