import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, Image, KeyboardAvoidingView, Navigator } from 'react-native';


export default function NewPage(params) {
  return (
    <View style={styles.container}>
      <Text>This is another page after the home page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  }

});