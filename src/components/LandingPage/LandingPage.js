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
    <View style={tw`w-full h-full`}>
      <ImageBackground
        style={tw`w-full h-full`}
        source={require("../../../assets/Onboarding.png")}
      >
        <Image
          style={tw`mt-48 w-32 pl-36 h-24`}
          source={require("../../../assets/LogoBike.png")}
        />
        <View style={tw`my-72`}>
          <View style={tw`pt-32 w-4/5 ml-8`}>
            <Button
              onPress={() => {
                navigation.navigate("Signup");
              }}
              title="Sign Up"
              color="#2F2C2C"
            />
          </View>

          <Text
            style={tw`pl-32 pt-6 text-yellow-400 font-semibold`}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Already Have an Account?
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
