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
import Swipeout from 'react-native-swipeout';
import keyIndex from 'react-key-index';

import {StackNavigator} from 'react-navigation';




export default class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ''
    }
    try{
      AsyncStorage.getItem('form').then((val) => {
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
    var projects = this.state.list;
    projects = keyIndex(projects, 1);
    return projects.map((data,i) => {
      console.log(data)
      console.log(i)
      console.log(this.props)
      console.log(projects)
      let swipeBtns = [{
        text: 'Delete',
        backgroundColor: 'red',
        // onPress: (val) => {this.resetKey.bind(this)}
      }];
      return(
          <Swipeout right={swipeBtns} onPress={console.log(data)}>
        <ListItem key={data._emailId}
          title={data.projname}
          subtitle={data.compfrom}
          // rightIcon={data.numtree}
          onPress={() =>

            // this.props.navigation.navigate('NewPage')
              { console.log(data, "Was deleted")}

          }
        />
          </Swipeout>
      )
    })
  }
}



  render() {
    console.log(this.props)
    console.log(this.state)
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
