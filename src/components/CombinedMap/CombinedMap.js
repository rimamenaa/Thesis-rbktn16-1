import React, { Component } from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import Station from "../Map/Station";
import { SpeedDial } from "react-native-elements";

function CombinedMap() {
  let open = false;
  return (
    <React.Fragment>
      <Station />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default CombinedMap;
