import React from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import commercial from "../../../assets/commercial.png";
import tailwind from "tailwind-rn";
import com from "../../../assets/com.png";

function Commercial() {
  return (
    <SafeAreaView style={tailwind("h-full")}>
      <ScrollView>
        <View style={tailwind(" items-center ")}>
          <Image
            source={commercial}
            style={{
              width: 400,
              height: 440,
            }}
          />

          <Text style={tailwind(" text-1xl  items-center font-semibold py-8 ")}>
            Welcome to By-cycle, your public bike share system in Tunisia , with
            over 1,000+ bikes and more than 20+ stations across SidiBoussaid,
            Marsa ,Carthage ,Aouina , Sokra ..etc It’s a fun, affordable and
            convenient transportation option for quick trips around town.
          </Text>

          <Image
            source={com}
            style={{
              width: 400,
              height: 440,
            }}
          />
          <Text style={tailwind(" text-1xl  items-center font-semibold py-8 ")}>
            Welcome to By-cycle, your public bike share system in Tunisia , with
            over 1,000+ bikes and more than 20+ stations across SidiBoussaid,
            Marsa ,Carthage ,Aouina , Sokra ..etc It’s a fun, affordable and
            convenient transportation option for quick trips around town.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Commercial;
