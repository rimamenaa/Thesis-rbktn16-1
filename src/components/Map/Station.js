import React, { useState, useEffect } from "react";
import { Platform,Text, Button, SafeAreaView, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
import * as Location from "expo-location";
import { BlurView } from "expo-blur";
import tw from "tailwind-react-native-classnames";
import { Entypo } from "@expo/vector-icons";

const Station = ({navigation}) => {
  const [location, setLocation] = useState({
    latitude: 36.8941204,
    longitude: 10.1870475,
  });

  useEffect(() => {
    console.log(location);
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
    console.log("press", location.coords);
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
    console.log(
      "Use these variables to send current location(",
      latitude,
      ",",
      longitude,
      ")"
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E6E5E5',borderTopLeftRadius:100}}>
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
        coordinate={{ latitude: 36.78825, longitude: 10 }}
        title={"title"}
        description={"description"}
      />
      <MapView.Marker
        coordinate={{ latitude: 34.70075, longitude: 9.1 }}
        title={"title"}
        description={"description"}
      />
      <MapView.Marker
        coordinate={{ latitude: 36.78825, longitude: 10.2324 }}
        title={"title"}
        description={"description"}
      />
      <MapView.Marker
        coordinate={{ latitude: 36.77725, longitude: 10.2324 }}
        title={"title"}
        description={"description"}
      />
      <MapView.Marker
        coordinate={{ latitude: 36.64725, longitude: 10.2324 }}
        title={"title"}
        description={"description"}
      />
      <MapView.Marker
        coordinate={{ latitude: 36.86625, longitude: 10.2324 }}
        title={"title"}
        description={"description"}
      />
      <MapView.Marker
        coordinate={{ latitude: 36.06555, longitude: 10.2324 }}
        title={"title"}
        description={"description"}
      />
    </MapView>

        <View style={tw `items-center mt-8`}>
      <View style={tw `flex flex-row mb-6`}>

        <Text style={tw `font-bold text-xl`}>
          Stations
        </Text> 
        <Text style={tw `ml-16 font-bold text-xl`}>
          Availability
        </Text> 
        </View>
        

        <View  style={tw   `rounded-md flex flex-row items-center mr-16`}>
        <Text style={tw `font-bold text-lg ml-12`} >
          <Entypo name="location-pin" size={20} color="red" /> La Marsa
        </Text>
        <Text style={tw `ml-20 text-lg`} >
          13 bikes
        </Text>
              </View>
              <View  style={tw   `rounded-md flex flex-row items-center mr-16`}>
        <Text style={tw `ml-12 text-lg font-bold`} >
          <Entypo name="location-pin" size={20} color="red" /> Lac 3
        </Text>
      
        <Text style={tw `ml-28 text-lg`} >
          26 bikes
        </Text>
        </View>
        <View  style={tw   `rounded-md flex flex-row items-center mr-16`}>

        <Text style={tw `ml-12 text-lg font-bold`} >
          <Entypo name="location-pin" size={20} color="red" /> Sidi Bousaid
        </Text>
      
        <Text style={tw `ml-14 text-lg`} >
            18 bikes
        </Text>
        </View>

        <View  style={tw   `rounded-md flex flex-row items-center mr-16`}>

      <Text style={tw `ml-12 text-lg font-bold`} >
        <Entypo name="location-pin" size={20} color="red" /> La Goulette
      </Text>
      <Text style={tw `ml-16 text-lg`} >
      22 bikes
      </Text>
</View>
</View>

        <View
          style={tw`w-11/12 h-12 my-6 rounded bg-yellow-500 items-center ml-4`}  
        >
          <Text
            onPress={() => {
              navigation.navigate("Bikes");
            }}
            style={tw`text-black pt-2 font-bold text-xl`}
          >
            Order
          </Text>
        </View> 
    </SafeAreaView>
  );
};
export default Station;


