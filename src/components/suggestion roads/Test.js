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
            " min-w-full  bg-blue-300 items-center  rounded-1xl flex "
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
              alert("Mazelet ma 7adhretch wallahi la te7chemha");
            }}
          >
            Rent
          </Text>
          <Text
            style={tailwind("text-3xl font-semibold py-8 ")}
            onPress={() => {
              alert("ma3neha ma fhemtech rou7ek ? be9i tenzel");
            }}
          >
            Rules
          </Text>
          <Text
            style={tailwind("text-3xl font-semibold py-8 ")}
            onPress={() => {
              alert("arrahhhhhh ");
            }}
          >
            Meet the Bikes
          </Text>
          <Text
            style={tailwind("text-3xl font-semibold py-8 ")}
            onPress={() => {
              alert("You tapped the Contact Us!");
            }}
          >
            Contact us
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
