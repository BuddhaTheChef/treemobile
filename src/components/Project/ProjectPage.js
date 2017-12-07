import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, Image, KeyboardAvoidingView, Navigator, ScrollView } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../images/treelogo.jpg')}/>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2 ,
    borderColor: 'black'
  },
});
