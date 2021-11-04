import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";

import tailwind from "tailwind-rn";
import Footer from "../Footer/Footer"

function HomePage({ navigation }) {
  return (
    <ImageBackground
      style={tailwind("h-full")}
      source={require("../../../assets/yellowbike3.png")}
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
                navigation.navigate("AboutBikes");
              }}
            >
              bikes
            </Text>
            <Text
              style={tailwind(
                " text-xl mt-4 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
              )}
              onPress={() => {
                navigation.navigate("Rules");
              }}
            >
              Rules
            </Text>
            <Text
              style={tailwind(
                " text-xl mt-4 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
              )}
              onPress={() => {
                navigation.navigate("SuggestionRoads");
              }}
            >
              Suggestion Roads
            </Text>
            <Text
              style={tailwind(
                " text-xl mt-4 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
              )}
              onPress={() => {
                navigation.navigate("Station");
              }}
            >
              Station
            </Text>
            <Text
              style={tailwind(
                " text-xl mt-4 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
              )}
              onPress={() => {
                navigation.navigate("Reviews");
              }}
            >
              Reviews
            </Text>
            <Text
              style={tailwind(
                " text-xl mt-4 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
              )}
              onPress={() => {
                navigation.navigate("ContactUs");
              }}
            >
              ContactUs
            </Text>
    
            <Text
              style={tailwind(
                "text-xl mt-4 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
              )}
              onPress={() => {
                navigation.navigate("Rent");
              }}
            >
              Rent
            </Text>
            <Text
              style={tailwind(
                "text-xl mt-4 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
              )}
              onPress={() => {
                navigation.navigate("Info");
              }}
            >
              Info
            </Text>
            <View style={tailwind("w-full mt-52")}>
            <Footer navigation={navigation}/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default HomePage;
