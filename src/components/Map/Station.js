import React, { useEffect, useState } from "react";

import { Platform, StyleSheet, Text, View } from "react-native";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const Station = () => {
  const [Loca, SetLoca] = useState({});

  useEffect = () => {
    SetLoca (
      navigator.geolocation.getCurrentPosition((position) => {
         position.coords;
      
    })
  }

  return (
    <MapView
      showsCompass={true}
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      initialRegion={Loca}
    ></MapView>
  );
};

export default Station;
