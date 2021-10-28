import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/components/Homepage/Home";
import { NativeRouter, Switch, Route } from "react-router-native";
import Login from "./src/components/login/Login";
export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Home />
        <View>
          {" "}
          <Text>Another hello </Text>
        </View>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
