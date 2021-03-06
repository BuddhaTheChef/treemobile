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
  Navigator
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC9I51PIE1HTT2BfFE1dEY6OEARHc1z8zQ",
  authDomain: "treemobile-382cf.firebaseapp.com",
  databaseURL: "https://treemobile-382cf.firebaseio.com",
  projectId: "treemobile-382cf",
  storageBucket: "treemobile-382cf.appspot.com",
  messagingSenderId: "772463860333"
};
firebase.initializeApp(config);

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      userUid: '',
      error: '',
      loading: false
    };
  }

  onLoginPress(event) {
    this.setState({error: '', loading: true});
   console.log(this.state);
   console.log(this.props);
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
      firebase.auth().onAuthStateChanged((user) => {
  if (user) {

    console.log(user.uid);
    this.setState({ email: user.email })
    this.setState({ userUid: user.uid })
  }
  console.log(this.state)
});
      this.setState({error: '', loading: false});
      this.props.navigation.navigate('Home');
    }).catch(() => {
      this.setState({error: 'Wrong Email or Password', loading: false});
    })
  }

  onSignUpPress(event) {
    this.setState({error: '', loading: true});

    const {email, password} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
      firebase.auth().onAuthStateChanged((user) => {

      if (user) {


        console.log(user.uid);
        this.setState({ email: user.email })
        this.setState({ userUid: user.uid })
      }
      console.log(this.state)
    });
      this.setState({error: '', loading: false});
      this.props.navigation.navigate('Home');
    }).catch(() => {
      this.setState({error: 'Wrong Email or Password', loading: false});
    })
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.warning}>{this.state.error}</Text>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../images/treelogo.jpg')}/>
          <Text style={styles.title}>Fast and Easy way to locate Trees
          </Text>
        </View>
        <View style={styles.formContainer}>

          <TextInput value={this.state.email} onChangeText={email => this.setState({email})} placeholder="Username or Email" placeholderTextColor="rgba(0,0,0,0.5)" returnKeyType="next" onSubmitEditing={() => this.passwordInput.focus()} keyboardType='email-address' style={styles.input}/>

          <TextInput value={this.state.password} onChangeText={password => this.setState({password})} placeholder="Password" placeholderTextColor="rgba(0,0,0,0.5)" secureTextEntry returnKeyType="go" style={styles.input} ref={(input) => this.passwordInput = input}/>

          <TouchableOpacity onPress={this.onLoginPress.bind(this)} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpBegin}>Don't have an account
            </Text>
            <TouchableOpacity onPress={this.onSignUpPress.bind(this)}>
              <Text style={styles.signUpEnd}> Sign Up</Text>
            </TouchableOpacity>
          </View>

        </View>
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
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  title: {
    color: '#fff',
    marginTop: 10,
    width: 130,
    textAlign: 'center'
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
    marginBottom: 6,
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  },
  signUpContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 67,
    padding: 5
  },
  signUpBegin: {
    color: '#fff'
  },
  signUpEnd: {
    color: 'rgb(7, 221, 67)'
  },
  warning: {
    color: 'rgb(255, 0, 99)',
    textShadowColor: 'rgb(168, 168, 168)',
    textShadowOffset: {
      width: 0,
      height: .1
    },
    textShadowRadius: 2,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
