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
          ADD SOME TYPE OF DESCRIPTION HERE EXPLAINING WHAT THIS BUTTON DOES AND WHERE IT ROUTES YOU NEXT ALSO
          ADD A BACKGROUND IMAGE OR DECIDE IF YOU WANT TO MAKE IT LOOK LIKE THIS COOL STUFF!
        </Text>
    </View>
    <Text style={styles.middleThing}>ADD SOMETHING HERE (LOGO)</Text>
    <View style={styles.bottomcontainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Create')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Create Project</Text>
      </TouchableOpacity>
        <Text>
          ADD SOME TYPE OF DESCRIPTION HERE EXPLAINING WHAT THIS BUTTON DOES AND WHERE IT ROUTES YOU NEXT ALSO
          ADD A BACKGROUND IMAGE OR DECIDE IF YOU WANT TO MAKE IT LOOK LIKE THIS COOL STUFF!
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
   backgroundColor: 'mediumaquamarine'
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
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }

});
