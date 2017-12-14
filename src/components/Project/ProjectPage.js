import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Navigator,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

import {StackNavigator} from 'react-navigation';

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);

  }
  onLearnMore = () => {
  this.props.navigation.navigate('NewPage');
};

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>

          <List>
        <ListItem
          // key={i}
          // roundAvatar
          // avatar={{ uri: user.picture.thumbnail }}
          title={this.props.navigation.state.params.projname}
          subtitle={this.props.navigation.state.params.compfrom}
          onPress={() => this.onLearnMore()}
            />
    </List>

        <TouchableOpacity onPress={() => console.log(this.props)} style={styles.projects}>
          <Text>{this.props.projname}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('NewPage')} style={styles.projects}>
          <Text>Added Projects Go Here!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('NewPage')} style={styles.projects}>
          <Text>Added Projects Go Here!</Text>
        </TouchableOpacity>

      </ScrollView>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1
  },
  projects: {

    backgroundColor: 'whitesmoke',
    padding: 20,
    borderWidth: 2,
    borderColor: 'rgb(215, 215, 215)'
  }
});
