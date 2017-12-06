import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, KeyboardAvoidingView, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

const {width, height} =Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class Home extends Component {
  constructor(props){
    super(props)

    this.state ={
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      }
    }
  }

  watchID: ?number = null

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }

      this.setState({initialPosition: initialRegion})
      this.setState({markerPosition: initialRegion})
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }

      this.setState({initialPosition: lastRegion})
      this.setState({markerPosition: lastRegion})
    })
  }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchID)
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.initialPosition}>
            <MapView.Marker
              coordinate={this.state.markerPosition}>
                <View style={styles.radius}>
                  <View style={styles.marker} />
                </View>
            </MapView.Marker>

        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  },
  radius: {
    height: 40,
    width: 40,
    borderRadius: 50/2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,122,255,0.3)',
    borderWidth: 1,
    borderColor: 'rgba(0,122,255,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    height: 20,
    width: 20,
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 255, 117, 0.75)',
    borderWidth: 3,
    borderColor: 'rgb(147, 84, 0)',
  }

});
