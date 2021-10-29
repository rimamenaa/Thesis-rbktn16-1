import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import tailwind from "tailwind-rn";

export default function Navbar({ navigation }) {
  return (
    <SafeAreaView style={tailwind("h-full")}>
      <View style={tailwind(" pt-12 items-center ")}>
        <View style={tailwind("flex flex-row  my-8")}>
          <Text style={tailwind("text-4xl font-semibold ")}>By-Cycle</Text>
        </View>
        <View
          style={tailwind(
            " min-w-full  bg-blue-300 items-center  rounded-2xl flex "
          )}
        >
          <Text
            style={tailwind("text-3xl font-semibold py-8 ")}
            onPress={() => {
              navigation.navigate("Commercial");
            }}
          >
            Home page
          </Text>
          <Text
            style={tailwind("text-3xl font-semibold py-8 ")}
            onPress={() => {
              navigation.navigate("Station");
            }}
          >
            Station
          </Text>
          <Text
            style={tailwind("text-3xl font-semibold py-8 ")}
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            Signup
          </Text>
          <Text
            style={tailwind("text-3xl font-semibold py-8 ")}
            onPress={() => {
              navigation.navigate("ContactUs");
            }}
          >
            ContactUs
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
