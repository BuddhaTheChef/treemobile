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
  ScrollView,
  AsyncStorage
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

import {StackNavigator} from 'react-navigation';

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ''
    }
    try{
      AsyncStorage.getItem('database_form').then((val) => {
        this.setState({
          list: JSON.parse(val)
        })
      })
    }
    catch(err){
      console.log(err)
    }

  }
  onLearnMore = () => {
  this.props.navigation.navigate('NewPage');
};
parseData(){
  if(this.state.list){
    return this.state.list.map((data,i) => {
      console.log(data)
      return(
        <ListItem key={i}
          title={data.projname}
          subtitle={data.compfrom}
          // rightIcon={data.numtree}
          onPress={() => this.props.navigation.navigate('NewPage')}
        />
      )
    })
  }
}

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <List onPress={() => navigate('NewPage')}>{this.parseData()}</List>

        <TouchableOpacity onPress={() => navigate('NewPage')} style={styles.projects}>
          <Text>Added Projects Go Here!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('NewPage')} style={styles.projects}>
          <Text>Added Projects Go Here!</Text>
        </TouchableOpacity>

      </ScrollView>
    );
    console.log(projObj[0].projname)

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
