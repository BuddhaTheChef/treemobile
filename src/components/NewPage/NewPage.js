import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, Image, KeyboardAvoidingView, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import treelogo from '../../images/treelogo.jpg';


const {width, height} =Dimensions.get('window')

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE = 21.34031;
const LONGITUDE = -158.06647;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

export default class NewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
    };

    this.onMapPress = this.onMapPress.bind(this);
  }

  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: `Tree${id++}`,
        },
      ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          onPress={this.onMapPress}
        >
          {this.state.markers.map(marker => (
            <MapView.Marker
              title={marker.key}
              key={marker.key}
              coordinate={marker.coordinate}>
 <MapView.Callout>
  <Text>
    {marker.key}
      </Text>
    <TextInput
      placeholder="Description"
      style={styles.inputMap}
    />

 </MapView.Callout>
            </MapView.Marker>

          ))}
          <View style={styles.radius}>
                 <View style={styles.marker} />
               </View>
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.setState({ markers: [] })}
            style={styles.bubble}
          >
            <Text>Delete all created Markers </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  inputMap: {
    height: 40,
    width: 80,

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
