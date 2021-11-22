import React, { useState, useEffect } from "react";
import {
  Platform,
  Text,
  Button,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import tw from "tailwind-react-native-classnames";
import { Entypo } from "@expo/vector-icons";

const Station = ({ navigation }) => {
  const [location, setLocation] = useState({
    latitude: 36.8941204,
    longitude: 10.1870475,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  const getLoc = () => {
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;
    setRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    });
  };

  const sendLoc = () => {
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;
   
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 100 }}
    >
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0181,
          longitudeDelta: 0.0181,
        }}
        onPress={() => {
          sendLoc();
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: 36.888082, longitude: 10.182544 }}
          title={"Civil Protection"}
          description={"Station-1"}
        />
        <MapView.Marker
          coordinate={{ latitude: 36.893051, longitude: 10.187858 }}
          title={"Technopole Ghazela"}
          description={"Station-2"}
        />
        <MapView.Marker
          coordinate={{ latitude: 36.876388, longitude: 10.185943 }}
          title={"Fathi Zouhir Avenue"}
          description={"Station-3"}
        />
        <MapView.Marker
          coordinate={{ latitude: 36.900609, longitude: 10.183929 }}
          title={"Ariana Soghra"}
          description={"Station-4"}
        />
        <MapView.Marker
          coordinate={{ latitude: 36.889589, longitude: 10.171335 }}
          title={"Ghazela City"}
          description={"Station-5"}
        />
        <MapView.Marker
          coordinate={{ latitude: 36.910111, longitude: 10.187838 }}
          title={"Nour Jaafer"}
          description={"Station-6"}
        />
        <MapView.Marker
          coordinate={{ latitude: 36.884352, longitude: 10.194418 }}
          title={"Professors City"}
          description={"Station-7"}
        />
      </MapView>

      <View style={tw`items-center mt-8`}>
        <View style={tw`flex flex-row mb-6`}>
          <Text style={tw`font-bold text-xl`}>Stations</Text>
          <Text style={tw`ml-16 font-bold text-xl`}>Availability</Text>
        </View>

        <View style={tw`rounded-md flex flex-row items-center mr-16`}>
          <Text style={tw`font-bold text-lg ml-12`}>
            <Entypo name="location-pin" size={20} color="red" /> La Marsa
          </Text>
          <Text style={tw`ml-20 text-lg`}>13 bikes</Text>
        </View>
        <View style={tw`rounded-md flex flex-row items-center mr-16`}>
          <Text style={tw`ml-12 text-lg font-bold`}>
            <Entypo name="location-pin" size={20} color="red" /> Lac 3
          </Text>

          <Text style={tw`ml-28 text-lg`}>26 bikes</Text>
        </View>
        <View style={tw`rounded-md flex flex-row items-center mr-16`}>
          <Text style={tw`ml-12 text-lg font-bold`}>
            <Entypo name="location-pin" size={20} color="red" /> Sidi Bousaid
          </Text>

          <Text style={tw`ml-14 text-lg`}>18 bikes</Text>
        </View>

        <View style={tw`rounded-md flex flex-row items-center mr-16`}>
          <Text style={tw`ml-12 text-lg font-bold`}>
            <Entypo name="location-pin" size={20} color="red" /> La Goulette
          </Text>
          <Text style={tw`ml-16 text-lg`}>22 bikes</Text>
        </View>
      </View>

      <TouchableOpacity
        style={tw`w-11/12 h-12 my-6 rounded bg-yellow-400 items-center ml-4`}
        onPress={() => {
          navigation.navigate("Bikes");
        }}
      >
        <Text style={tw`text-black pt-2 font-bold text-xl`}>Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Station;
