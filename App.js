import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Button } from 'react-native';
import Login from './src/components/Login/Login';
import Home from './src/components/MainView/Home';
import NewPage from './src/components/NewPage/NewPage';

import { StackNavigator } from 'react-navigation';


// export default class App extends React.Component {
//
//   render() {
//     return (
//     <Login />
//
//     );
//   }
// }

export default StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    }
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
      title: 'Home',
      headerRight: (<Button
        title={'New'}
        onPress={() => navigation.navigate('NewPage')}
      />)
      };
    }
  },
  NewPage: {
    screen: NewPage,
    navigationOptions: {
      title: 'NewPage'
    }
  }
});




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mediumaquamarine',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
