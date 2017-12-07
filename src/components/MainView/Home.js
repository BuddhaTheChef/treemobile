import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, Image, KeyboardAvoidingView, Navigator } from 'react-native';


export default function Home({ navigation }) {
  return (
  <View style={styles.container}>

    <View style={styles.topcontainer}>
      <TouchableOpacity onPress={() => navigation.navigate('NewPage')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Find Trees</Text>
      </TouchableOpacity>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
    </View>

      <Image style={styles.logo} source={require('../../images/treelogo.jpg')} />


    <View style={styles.bottomcontainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Create')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Create Project</Text>
      </TouchableOpacity>
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </Text>
    </View>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  topcontainer: {
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    flex: .5,
    padding: 20
  },
  middleThing: {
   textAlign: 'center',
   backgroundColor: 'grey',
   height: 0
 },
 logo: {
   top: 285,
   left: 156,
   zIndex: 5,
   position: 'absolute',
   width: 100,
   height: 100,
   borderRadius: 50,
   borderWidth: 2 ,
   borderColor: 'black'

 },
  bottomcontainer: {
    justifyContent: 'center',
    backgroundColor: '#3498db',
    padding: 20,
    flex: .5
  },
  buttonContainer: {
    backgroundColor: 'rgb(18, 130, 44)',
    paddingVertical: 15,
    marginBottom: 30,
    borderRadius: 5,
    borderWidth: 2 ,
    borderColor: 'black'
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',

  }

});
