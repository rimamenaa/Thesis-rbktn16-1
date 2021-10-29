import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  View,
  CheckBox,
  Text,
  TextInput,
  Button,
} from "react-native";

import ggl from "../../../assets/ggl.png";
import tailwind from "tailwind-rn";

function Login() {
  return (
    <View style={tailwind("flex md:flex-row items-center max-h-screen")}>
      <ImageBackground>
        <View>
          <Text style={tailwind("mt-12 ml-12 font-bold text-white text-base")}>
            Sign In
          </Text>
        </View>
        <View style={tailwind("bg-white mt-24 items-center w-80")}>
          <View style={tailwind("flex flex-row")}>
            <Image
              source={ggl}
              style={{ height: 18, width: 18, marginTop: 30 }}
            ></Image>
            <Text style={tailwind("mt-8 pl-2 font-bold")}>GOOGLE</Text>
          </View>

          <View style={("greycard", tailwind("bg-gray-100 h-96 mt-24"))}>
            <TextInput
              style={tailwind("mt-24 h-10 w-80 ml-3 bg-white")}
              type="text"
              placeholder="email"
              keyboardType="numeric"
              className="mt-12"
            />
            <TextInput
              style={tailwind("mt-6 h-10 w-80 ml-3 bg-white")}
              type="password"
              placeholder="password"
            />
            <View style={tailwind("flex flex-row")}>
              <Text style={tailwind("pl-2 pt-6")}>
                I Agree With The{" "}
                <Text style={tailwind("text-yellow-300")}>Privacy Policy</Text>
              </Text>
            </View>

            <View style={{ width: 167, marginTop: 70, marginLeft: 87 }}>
              <Button title="Sign In" color="#191b11" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Login;
