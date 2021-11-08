import { ScrollView } from "native-base";
import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import { BlurView } from 'expo-blur';
import tw from "tailwind-react-native-classnames";

export default function LandingPage({ navigation }) {
  return (
    
      <ImageBackground
        style={tw`w-full h-full`}
        source={require("../../../assets/Onboarding.png")}
      >
        <View style={tw`items-center`}>
        <Image
          style={tw`w-20 h-20 mt-8`}
          source={require("../../../assets/LogoBike.png")}
        />
        </View>
 
        <View style={tw`my-96 items-center`}>
          
        <Text style={tw`text-white pt-2 font-semibold ml-4 text-base`}>Welcome to <Text style={tw`font-bold text-yellow-400`}>BY-CYCLE</Text>, a new bike share system in Tunisia with over
            400+ bikes and more than 23+ stations across the country.</Text>
          <BlurView
           style={tw`w-11/12 h-12 my-6 rounded items-center`} intensity={50} tint="light" color="red">
            <Text
              onPress={() => {
                navigation.navigate("Signup");
              }}
              style={tw`text-white pt-2 font-semibold text-lg`}
                
            >Sign Up</Text>
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
