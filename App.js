import React from "react";
import { StyleSheet, Text, View } from "react-native-tailwind";
import Home from "./src/components/Homepage/Home";
import { NativeRouter, Switch, Route } from "react-router-native";
import Signup from "./src/components/signup/Signup";
import Login from "./src/components/login/Login";

export default function App() {
  return (
    <NativeRouter>
      <View>
        <Text>
          {" "}
          {/* <Home /> */}
          <Signup/>

        </Text>
      </View>
      </NativeRouter>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#2F3945 ",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
