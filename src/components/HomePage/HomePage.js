import React from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import tailwind from "tailwind-rn";

function HomePage({ navigation }) {
  return (
    <SafeAreaView style={tailwind("h-full")}>
      <ScrollView>
        <View
          style={tailwind(
            " min-w-full bg-gray-600  items-center  rounded-2xl flex "
          )}
        >
          <Text
            style={tailwind(
              " text-4xl  text-yellow-400 items-center font-bold py-8 "
            )}
            onPress={() => {
              navigation.navigate("Commercial");
            }}
          >
            Home page
          </Text>
          <Text
            style={tailwind("text-4xl  text-yellow-400 font-bold py-8 ")}
            onPress={() => {
              navigation.navigate("Rules");
            }}
          >
            Rules
          </Text>
          <Text
            style={tailwind("text-4xl  text-yellow-400 font-bold py-8 ")}
            onPress={() => {
              navigation.navigate("Station");
            }}
          >
            Station
          </Text>
          <Text
            style={tailwind("text-4xl  text-yellow-400 font-bold py-8 ")}
            onPress={() => {
              navigation.navigate("Reviews");
            }}
          >
            Reviews
          </Text>
          <Text
            style={tailwind("text-4xl  text-yellow-400 font-bold py-8 ")}
            onPress={() => {
              navigation.navigate("ContactUs");
            }}
          >
            ContactUs
          </Text>
          <Text
            style={tailwind("text-4xl  text-yellow-400 font-bold py-8 ")}
            onPress={() => {
              navigation.navigate("TestBase");
            }}
          >
            Test native base
          </Text>
          <Text
            style={tailwind("text-4xl  text-yellow-400 font-bold py-8 ")}
            onPress={() => {
              navigation.navigate("LandingPage");
            }}
          >
            Logout
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomePage;
