import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, KeyboardAvoidingView } from 'react-native';
import MapView from 'react-native-maps';


export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 21.3347,
            longitude: -158.0808,
            latitudeDelta: 0.0522,
            longitudeDelta: 0.0121,
          }}>
            <MapView.Marker
              coordinate={{
                latitude: 21.3347,
                longitude: -158.0808,
              }}>
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
    borderColor: 'rgba(0,122,255,0.5)',
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
