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
<<<<<<< HEAD
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
=======
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
>>>>>>> 554a49f18530265e127aa6c3806676a79cbaed78
              onPress={() => {
                navigation.navigate("Commercial");
              }}
            >
              Home page
            </Text>
            <Text
<<<<<<< HEAD
              style={tailwind("text-3xl font-semibold py-8 ")}
=======
              style={tailwind(
                " text-xl mt-10 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
              )}
>>>>>>> 554a49f18530265e127aa6c3806676a79cbaed78
              onPress={() => {
                navigation.navigate("Rules");
              }}
            >
              Rules
            </Text>
            <Text
<<<<<<< HEAD
              style={tailwind("text-3xl font-semibold py-8 ")}
              onPress={() => {
                navigation.navigate("CombinedMap");
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
=======
            style={tailwind(" text-xl mt-10 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
            )}
            onPress={() => {
              navigation.navigate("SuggestionRoads");
            }}
          > 
            Suggestion Roads
          </Text> 
          <Text
    style={tailwind(" text-xl mt-10 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold "
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
>>>>>>> 554a49f18530265e127aa6c3806676a79cbaed78
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
<<<<<<< HEAD
              style={tailwind("text-3xl font-semibold py-8 ")}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Login
            </Text>
            <Text
              style={tailwind("text-3xl font-semibold py-8 ")}
=======
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
              style={tailwind("text-xl mt-10 w-52 text-center rounded h-12 py-1 text-gray-800 border-4 border-gray-700 bg-opacity-25 items-center font-bold ")}
>>>>>>> 554a49f18530265e127aa6c3806676a79cbaed78
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
