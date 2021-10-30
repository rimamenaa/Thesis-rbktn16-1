import React from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import tailwind from "tailwind-rn";

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={tailwind("h-full")}>
      <ScrollView>
        <View style={tailwind(" items-center ")}>
          <View
            style={tailwind(
              " min-w-full bg-blue-200  items-center  rounded-2xl flex "
            )}
          >
            <Text
              style={tailwind(" text-3xl  items-center font-semibold py-8 ")}
              onPress={() => {
                navigation.navigate("Commercial");
              }}
            >
              Home page
            </Text>
            <Text
              style={tailwind("text-3xl font-semibold py-8 ")}
              onPress={() => {
                navigation.navigate("Rules");
              }}
            >
              Rules
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
                navigation.navigate("Login");
              }}
            >
              Login
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
      </ScrollView>
    </SafeAreaView>
  );
}
