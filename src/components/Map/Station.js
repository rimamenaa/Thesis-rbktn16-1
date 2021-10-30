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
        style={styles.map}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  map: {
    flex: 0.6,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  item: {
    flex: 1,
    alignItems: "center",
  },
  flexer: {
    justifyContent: "flex-start",
  },
  search: {
    flexWrap: "wrap",
  },
});
