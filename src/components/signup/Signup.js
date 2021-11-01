import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Button,
  StyleSheet,
  CheckBox,
  ImageBackground,
} from "react-native";
import tw from "tailwind-react-native-classnames";
export default function Signup() {
  return (
    <View style={tw`w-full h-full`}>
      <ImageBackground
        style={tw`w-full h-full`}
        source={require("../../../assets/back.png")}
      >
        <View>
          <Text
            style={tw`mt-12 items-center ml-28 font-bold text-gray-700 text-base`}
          >
            Create An Account
          </Text>
        </View>
        <View style={tw`h-3/5 mt-24 w-11/12 ml-4 bg-gray-100 rounded`}>
          <View style={tw` mt-4 w-4/5 ml-8 flex `}>
            <TextInput
              style={tw` h-10 rounded bg-white`}
              type="text"
              placeholder="name"
            />
            <TextInput
              style={tw` h-10 mt-4 rounded bg-white`}
              type="text"
              placeholder="username"
            />
            <TextInput
              style={tw` h-10 mt-4 rounded bg-white`}
              type="text"
              placeholder="email"
            />
            <TextInput
              style={tw`mt-4 mt-4 rounded h-10 bg-white `}
              secureTextEntry={true}
              placeholder="password"
            />
          </View>
          <View style={tw`pt-4 w-4/5 ml-8`}>
            <Button title="Sign Up" color="#2F2C2C" />
          </View>
          <View style={tw` items-center pt-6 `}>
            <Text style={tw`  text-gray-500 font-bold text-xs`}>
              Or Sign Up with credentials{" "}
            </Text>
          </View>
          <View
            style={tw`border border-white items-center bg-white mt-8 rounded w-4/5 ml-8 h-8`}
          >
            <View style={tw`flex flex-row`}>
              <Image
                style={tw`mt-1.5 w-4 pl-2 h-4`}
                source={require("../../../assets/ggl.png")}
              />
              <Text style={tw`mt-1 pl-6 font-bold text-black`}>GOOGLE</Text>
            </View>
          </View>
          <View style={tw`flex flex-row`}>
            {/* <CheckBox style={tw `mt-6 ml-8`}/> */}
            <Text style={tw`pl-8 mt-4 text-black`}>
              I Agree With The{" "}
              <Text style={tw`text-yellow-300`}>Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
