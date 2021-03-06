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
import {StackNavigator} from 'react-navigation';
import * as firebase from 'firebase';
const ProjectPage = require('../Project/ProjectPage');

export default class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      uid: '',
      projname: '',
      compfrom: '',
      numtree: '',
      location: '',
      price: ''
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({email: user.email})
        this.setState({uid: user.uid})
      }
      console.log(this.state)
    })

    this.focusNextField = this.focusNextField.bind(this);

    this.inputs = {};

  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  onSubmit = () => {
    const projArr = [];
    // this.props.navigation.navigate('ProjectPage', this.state);
    console.log(this.state)
    const projObj = {
      email: this.state.email,
      uid: this.state.uid,
      projname: this.state.projname,
      compfrom: this.state.compfrom,
      numtree: this.state.numtree,
      location: this.state.location,
      price: this.state.price
    }

    projArr.push(projObj);
    try {
      AsyncStorage.getItem('form').then((val) => {
        if (val !== null) {
          let a = JSON.parse(val);
          console.log(val)
          a.push(projObj)
          console.log(a)
          AsyncStorage.setItem('form', JSON.stringify(a)).then(() => {
            this.props.navigation.navigate('ProjectPage', this.state);
          })
        } else {
          AsyncStorage.setItem('form', JSON.stringify(projArr)).then(() => {
            this.props.navigation.navigate('ProjectPage', this.state);
          })
        }
      })
    } catch (err) {
      console.log(err)
    }

  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ScrollView>
          <Text style={styles.inputTitle}>PROJECT</Text>

          <TextInput placeholder="Project Name" placeholderTextColor="rgba(0,0,0,0.5)" style={styles.input} value={this.state.text} onChangeText={(text) => this.setState({projname: text})} blurOnSubmit={false} onSubmitEditing={() => {
            this.focusNextField('two');
          }} returnKeyType={"next"} ref={input => {
            this.inputs['one'] = input;
          }}/>

          <Text style={styles.inputTitle}>FROM</Text>
          <TextInput placeholder="Company Name" placeholderTextColor="rgba(0,0,0,0.5)" style={styles.input} value={this.state.from} onChangeText={(text) => this.setState({compfrom: text})} blurOnSubmit={false} onSubmitEditing={() => {
            this.focusNextField('three');
          }} returnKeyType={"next"} ref={input => {
            this.inputs['two'] = input;
          }}/>

          <Text style={styles.inputTitle}>TREES</Text>
          <TextInput placeholder="Number Of Trees" placeholderTextColor="rgba(0,0,0,0.5)" style={styles.input} value={this.state.numTree} onChangeText={(text) => this.setState({numtree: text})} blurOnSubmit={false} onSubmitEditing={() => {
            this.focusNextField('four');
          }} returnKeyType={"next"} ref={input => {
            this.inputs['three'] = input;
          }}/>

          <Text style={styles.inputTitle}>LOCATION</Text>
          <TextInput placeholder="Street Address" placeholderTextColor="rgba(0,0,0,0.5)" style={styles.input} value={this.state.location} onChangeText={(text) => this.setState({location: text})} blurOnSubmit={false} onSubmitEditing={() => {
            this.focusNextField('five');
          }} returnKeyType={"next"} ref={input => {
            this.inputs['four'] = input;
          }}/>

          <Text style={styles.inputTitle}>BID</Text>
          <TextInput placeholder="Enter $ Amount" placeholderTextColor="rgba(0,0,0,0.5)" style={styles.input} value={this.state.price} onChangeText={(text) => this.setState({price: text})} ref={input => {
            this.inputs['five'] = input;
          }}/>

          <TouchableOpacity onPress={() => this.onSubmit()} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    padding: 20
  },
  inputTitle: {
    marginLeft: 5,
    paddingBottom: 5
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginBottom: 25,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  buttonContainer: {
    backgroundColor: 'rgb(18, 130, 44)',
    paddingVertical: 15,
    marginTop: 50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black'
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }

});
