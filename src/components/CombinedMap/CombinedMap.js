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
import Search from "../Search/Search";
function CombinedMap() {
  return (
    <React.Fragment>
      <Station />
      <Search />
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
