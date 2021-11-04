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
    <ScrollView style={tw`w-full h-full`}>
      <ImageBackground
        style={tw`w-full h-full`}
        source={require("../../../assets/Onboarding.png")}
      >
        <View style={tw`items-center`}>
          <Image
            style={tw`w-24 h-24 mt-2`}
            source={require("../../../assets/LogoBike.png")}
          />
        </View>
        <View style={tw`my-96 items-center`}>
          <View style={tw`pt-32 w-4/5`}>
            <Button
              onPress={() => {
                navigation.navigate("Signup");
              }}
              title="Sign Up"
              color="#2F2C2C"
            />
          </View>
          <View style={tw`items-center`}>
            <Text
              style={tw` pt-6 text-yellow-400 font-semibold`}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Already Have an Account?
            </Text>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
