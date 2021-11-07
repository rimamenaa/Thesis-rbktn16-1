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
import tw from "tailwind-react-native-classnames";

export default function LandingPage({ navigation }) {
  return (
    
      <ImageBackground
        style={tw`w-full h-full`}
        source={require("../../../assets/Onboarding.png")}
      >
        <View style={tw`items-center`}>
        <Image
          style={tw`w-20 h-20 mt-2`}
          source={require("../../../assets/LogoBike.png")}
        />
        </View>
 
        <View style={tw`my-96 items-center`}>
          
        <Text style={tw`text-white font-semibold ml-4 text-xl`}>Welcome to BY-CYCLE, a new bike share system in Tunisia with over
            400+ bikes and more than 19+ stations across the country.</Text>
          <View style={tw`w-4/5 py-12`}>
            <Button
              onPress={() => {
                navigation.navigate("Signup");
              }}
              title="Sign Up"  
              color="#2F2C2C"
              blurRadius={50}
            />
          </View>
          <View style={tw`items-center`}>
            <Text
              style={tw`pt-4 text-yellow-400 font-semibold`}
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
