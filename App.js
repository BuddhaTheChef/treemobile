import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Button
} from 'react-native';
import Login from './src/components/Login/Login';
import Home from './src/components/MainView/Home';
import NewPage from './src/components/NewPage/NewPage';
import Create from './src/components/Create/Create';
import ProjectPage from './src/components/Project/ProjectPage';

import {StackNavigator} from 'react-navigation';

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
      title: 'Login'
    }
  },
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {title: 'Home', headerRight: (<Button title={'Projects'} onPress={() => navigation.navigate('ProjectPage')}/>)};
    }
  },
  NewPage: {
    screen: NewPage,
    navigationOptions: {
      title: 'Map View'
    }
  },
  Create: {
    screen: Create,
    navigationOptions: {
      title: 'Create Project'
    }
  },
  ProjectPage: {
    screen: ProjectPage,
    navigationOptions: {
      title: 'Projects'
    }
  }
});

onSubmit = fields => {
  console.log("App project page got: ", fields);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mediumaquamarine',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
