import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";

import tailwind from "tailwind-rn";

function HomePage({ navigation }) {
  return (
    <ImageBackground
      style={tailwind("h-full")}
      source={require("../../../assets/smallBike.png")}
    >
      <SafeAreaView style={tailwind("max-h-full")}>
        <ScrollView>
          <View
            style={tailwind(
              " min-w-full bg-transparent items-center mt-8 rounded-2xl flex "
            )}
          >
            <Text
              style={tailwind(
                " text-xl w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
              )}
              onPress={() => {
                navigation.navigate("Commercial");
              }}
            >
              Home page
            </Text>
            <Text
              style={tailwind(
                " text-xl mt-10 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
              )}
              onPress={() => {
                navigation.navigate("Rules");
              }}
            >
              Rules
            </Text>
            <Text
              style={tailwind(
                " text-xl mt-10 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
              )}
              onPress={() => {
                navigation.navigate("SuggestionRoads");
              }}
            >
              Suggestion Roads
            </Text>
            <Text
              style={tailwind(
                " text-xl mt-10 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
              )}
              onPress={() => {
                navigation.navigate("Station");
              }}
            >
              Station
            </Text>
            <Text
              style={tailwind(
                " text-xl mt-10 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
              )}
              onPress={() => {
                navigation.navigate("Reviews");
              }}
            >
              Reviews
            </Text>
            <Text
              style={tailwind(
                " text-xl mt-10 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
              )}
              onPress={() => {
                navigation.navigate("ContactUs");
              }}
            >
              ContactUs
            </Text>
            {/* <Text
              style={tailwind(
                " text-xl mt-10 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
              )}
              onPress={() => {
                navigation.navigate("TestBase");
              }}
            >
              Test native base
            </Text> */}
            <Text
              style={tailwind(
                "text-xl mt-10 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
              )}
              onPress={() => {
                navigation.navigate("Rent");
              }}
            >
              Rent
            </Text>
            <Text
              style={tailwind(
                "text-xl mt-10 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
              )}
              onPress={() => {
                navigation.navigate("LandingPage");
              }}
            >
              Logout
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default HomePage;
