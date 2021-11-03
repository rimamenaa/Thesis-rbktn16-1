import * as React from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const { useState, useEffect } = React;

export default function MapScreen() {
  const [locationResult, setLocation] = useState(null);
  const [mapRegion, setRegion] = useState(null);

  useEffect(() => {
    const getLocationAsync = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      setLocation(JSON.stringify({ latitude, longitude }));

      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    };

    getLocationAsync();
  });

  if (locationResult === null) {
    return <Text>Finding your current location...</Text>;
  }

  if (hasLocationPermissions === false) {
    return <Text>Location permissions are not granted.</Text>;
  }

  if (mapRegion === null) {
    return <Text>Map region doesn't exist.</Text>;
  }

  return (
    <MapView
      style={styles.container}
      region={mapRegion}
      zoomEnabled
      initialRegion={{
        latitude: 36.67343096953564,
        latitudeDelta: 0.0922,
        longitude: 10.53214,
        longitudeDelta: 0.0421,
      }}
      onRegionChange={(region) => setRegion(region)}
    >
      <MapView.Marker
        title="BYCYCLE, Inc."
        description="Bicycle Rent Station"
        image={require("../Map/BicycleMarker.png")}
        coordinate={{ latitude: 36.8951, longitude: 10.1885 }}
      />
    </MapView>
  );
}

MapScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
