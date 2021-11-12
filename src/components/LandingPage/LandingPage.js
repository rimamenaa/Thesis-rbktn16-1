import { ScrollView } from "native-base";
import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import { BlurView } from "expo-blur";
import tw from "tailwind-react-native-classnames";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LandingPage({ navigation }) {
  const hints = [
    [
      "Welcome to BY-CYCLE, a new bike share system in Tunisia with over 400+ bikes and more than 23+ stations across the country.",
    ],
    [
      "Any trip. Any time. Anywhere we are. By-Cycle provides the essential mode of transportation for our changed world.",
    ],
  ];
  const [newName, setnewName] = useState([
    "Welcome to BY-CYCLE, a new bike share system in Tunisia with over 400+ bikes and more than 23+ stations across the country.",
  ]);
  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * hints.length);
    setnewName(hints[index]);
  }, []);
  useEffect(() => {
    const intervalID = setInterval(shuffle, 3500);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  return (
    <ImageBackground
      style={tw`w-full h-full`}
      source={require("../../../assets/Onboarding.png")}
    >
      <View style={tw`items-center`}>
        <Image
          style={tw`w-20 h-20 mt-8`}
          source={require("../../../assets/LogoBike.png")}
          alt="image"
        />
      </View>

      <View style={tw`my-96 items-center`}>
        <View style={tw`items-center`}>
        <Text style={tw`text-white pt-12 ml-8 mr-8 font-semibold text-base`}>
          {newName[0]}
          <Text></Text>
          {newName[1]}
        </Text>
        </View>
        <BlurView style={tw`mt-4 rounded`}>
          <TouchableOpacity
           style={tw`w-80 h-12  items-center`}
           intensity={50}
           tint="light"
           color="red"
            onPress={() => {
              navigation.navigate("Signup");
            }}
            
          >
           <Text style={tw`text-white mt-2 font-bold text-lg`}>Sign Up</Text>
          </TouchableOpacity>
        </BlurView>
        <View style={tw`items-center`}>
          <Text
            style={tw`pt-2 text-yellow-400 font-semibold`}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Already Have an Account?
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}
