import React from "react";
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
        source={require("../../../assets/01 Onboarding.png")}
      >
        <Image
          style={tw`mt-48 w-32 pl-36 h-24`}
          source={require("../../../assets/LogoBike.png")}
        />
        <View style={tw`my-72`}>
          <View style={tw`pt-4 w-4/5 ml-8`}>
            <Button
              onPress={() => {
                navigation.navigate("Signup");
              }}
              title="Sign Up"
              color="#2F2C2C"
            />
          </View>

          <Text style={tw`pl-28 pt-3 text-yellow-400 text-semibold`}>
            Already Have an Account?
          </Text>

          <View style={tw`items-center bg-transparent rounded w-4/5 ml-8 h-8`}>
            <View style={tw`flex flex-row`}>
              <Image
                style={tw`mt-1.5 w-4 pl-2 h-4`}
                source={require("../../../assets/ggl.png")}
              />
              <Text style={tw`mt-1 pl-2 font-bold text-white`}>GOOGLE</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
