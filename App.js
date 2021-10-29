import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/components/Homepage/Home";
import { NativeRouter, Switch, Route } from "react-router-native";
import Map from "./src/components/Map/Map";
export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Map></Map>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: "#484848	",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
