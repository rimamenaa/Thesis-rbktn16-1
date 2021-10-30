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
import Rating from "../Rating/Rating";
import Search from "../Search/Search";
function CombinedMap() {
  return (
    <React.Fragment>
      <Station />
      <Search />
      <Rating />
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
