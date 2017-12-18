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
        console.log(this.state.list)
        console.log(val)
        console.log(this.props.navigation)
        console.log(this.state)
        console.log(JSON.parse(val))
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
      let key = data._emailId;
      deleteNote = () => {
        console.log();
        // projects.splice(data, 1);
        // this.setState({list: projects})

        try{
          AsyncStorage.removeItem('form').then((val) => {
            if(val === key){
            console.log(key)
            console.log(this.state.list)
            console.log(JSON.parse(val))
            this.setState({
              list: JSON.parse(val)
            })
          } else {
            console.log(JSON.parse(val))
            this.setState({
              list: JSON.parse(val)
            })
          }
          });
          console.log(this.state.list)
        }catch(error){
          console.log('Something Went Wrong!')
        }
      }

      console.log(data)
      console.log(data._emailId)
      console.log(i)
      console.log(this.props)
      console.log(projects)
      let swipeBtns = [{
        text: 'Delete',
        backgroundColor: 'red',
         onPress: (key) => {deleteNote()}
      }];
      return(
          <Swipeout right={swipeBtns} key={data._emailId} onPress={(key) => this.deleteNote.bind(this)}>
            <ListItem
              containerStyle={styles.listitem}
              key={data._emailId}
              title={data.projname}
              subtitle={data.compfrom}
              rightTitle={data.numtree}
              rightTitleStyle={styles.rightIcon}
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
        <List containerStyle={styles.listContainer}>{this.parseData()}</List>
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
    backgroundColor: 'whitesmoke'
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
    padding: 100,
  },
  rightIcon: {
    fontSize: 18,
    color: 'rgb(65, 65, 65)',
    marginRight: 15
  },
  listContainer: {
    marginTop: 0,
  },
  listitem: {
    backgroundColor: 'whitesmoke'
  }
});
