import React from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import commercial from "../../../assets/commercial.png";

function Commercial() {
  return (
    <View>
      <Text> Home page can be </Text>
      <Image
        source={commercial}
        style={{
          width: 170,
          height: 170,
          marginTop: 40,
        }}
      ></Image>
    </View>
  );
}

export default Commercial;
