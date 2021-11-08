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
import { Entypo } from '@expo/vector-icons'; 

function CombinedMap() {
  let open = false;
  return (
    <View>
    <React.Fragment>
      <Station />
          <Text>yey</Text>

    </React.Fragment>      
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default CombinedMap;
