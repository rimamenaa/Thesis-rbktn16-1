import React, { Component } from "react";
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
export default class Station extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {},
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      var crd = pos.coords;
      this.setState({
        coords: crd,
      });
    });
  }
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: this.state.coords.latitude,
          longitude: this.state.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}
