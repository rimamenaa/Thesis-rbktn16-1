import React from "react";
import {
  Button,
  Image,
  TextInput,
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from "react-native";
import ggl from "../../../assets/google.png";
import tailwind from "tailwind-rn";

const Signup = () => {
  return (
    <View style={tailwind("flex md:flex-row items-center max-h-screen")}>
      <View>
        <Text
          style={tailwind(
            "mt-12 items-center font-bold text-gray-600 text-base"
          )}
        >
          Create An Account
        </Text>
      </View>
      <View style={tailwind("bg-white mt-8 items-center w-80")}>
        <View style={tailwind("flex flex-row")}>
          <Image
            source={ggl}
            style={{ height: 18, width: 18, marginTop: 30 }}
          ></Image>
          <Text style={tailwind("mt-8 pl-2 font-bold")}>GOOGLE</Text>
        </View>

        <View style={("greycard", tailwind("bg-gray-100 h-3/4 mt-8"))}>
          <TextInput
            style={tailwind("mt-16 h-16 w-80 mr-3 ml-3 bg-white")}
            type="text"
            placeholder="Name"
            className="mt-12"
          />
          <TextInput
            style={tailwind("mt-6 h-16 w-80 mr-3 ml-3 bg-white")}
            type="text"
            placeholder="Username"
            className="mt-12"
          />
          <TextInput
            style={tailwind("mt-6 h-16 w-80 mr-3 ml-3 bg-white")}
            type="text"
            placeholder="Email"
            className="mt-12"
          />
          <TextInput
            style={tailwind("mt-6 h-16 w-80 mr-3 ml-3 bg-white")}
            secureTextEntry={true}
            placeholder="password"
          />
          <View style={tailwind("flex flex-row")}>
            <Text style={tailwind("pl-2 pt-6")}>
              I Agree With The{" "}
              <Text style={tailwind("text-yellow-300")}>Privacy Policy</Text>
            </Text>
          </View>

          <View
            style={{
              width: 167,
              marginTop: 70,
              marginBottom: 50,
              marginLeft: 87,
            }}
          >
            <Button title="Sign Up" color="#191b11" />
          </View>
        </View>
      </View>
    </View>
  );
};
export default Signup;
