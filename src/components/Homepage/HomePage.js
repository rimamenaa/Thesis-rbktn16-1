import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";

import { Stack, Button } from "native-base";

import tailwind from "tailwind-rn";
import Footer from "../Footer/Footer";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

function HomePage({ navigation }) {
  const makePhoneCall = () => {
    if (Platform.OS === "android") {
      Linking.openURL("tel:0021622111333");
    } else {
      Linking.openURL("telprompt:0021622111333");
    }
  };
  return (
    // <TouchableOpacity>
    <ImageBackground
      style={tailwind("h-full")}
      source={require("../../../assets/yellowbike3.png")}
    >
      <SafeAreaView style={tailwind("max-h-full")}>
        <ScrollView>
          <View
            style={tailwind(
              " min-w-full bg-transparent items-center mt-32 rounded-2xl flex "
            )}
          >
            <Stack
              mb="2.5"
              mt="1.5"
              direction={{
                base: "column",
                md: "row",
              }}
              space={2}
              mx={{
                base: "auto",
                md: "0",
              }}
            >
              <Button
                size="lg"
                variant="subtle"
                colorScheme="amber"
                width="81"
                height="20"
                onPress={() => {
                  navigation.navigate("AboutBikes");
                }}
              >
                <MaterialCommunityIcons name="bike" size={24} color="black" />
              </Button>
            </Stack>

            <Stack
              mb="2.5"
              mt="1.5"
              direction={{
                base: "column",
                md: "row",
              }}
              space={2}
              mx={{
                base: "auto",
                md: "0",
              }}
            >
              <Button
                size="lg"
                variant="subtle"
                colorScheme="amber"
                width="210"
                height="12"
                onPress={() => {
                  navigation.navigate("Rules");
                }}
              >
                Rules
              </Button>
            </Stack>

            <Stack
              mb="2.5"
              mt="1.5"
              direction={{
                base: "column",
                md: "row",
              }}
              space={2}
              mx={{
                base: "auto",
                md: "0",
              }}
            >
              <Button
                size="lg"
                variant="subtle"
                colorScheme="amber"
                width="81"
                height="20"
                onPress={() => {
                  navigation.navigate("SuggestedRoutes");
                }}
              >
                <FontAwesome5 name="route" size={24} color="black" />
              </Button>
            </Stack>

            <Stack
              mb="2.5"
              mt="1.5"
              direction={{
                base: "column",
                md: "row",
              }}
              space={2}
              mx={{
                base: "auto",
                md: "0",
              }}
            >
              <Button
                size="lg"
                variant="subtle"
                colorScheme="amber"
                width="81"
                height="20"
                onPress={() => {
                  navigation.navigate("Station");
                }}
              >
                <Entypo name="location" size={24} color="black" />
              </Button>
            </Stack>

            <Stack
              mb="2.5"
              mt="1.5"
              direction={{
                base: "column",
                md: "row",
              }}
              space={2}
              mx={{
                base: "auto",
                md: "0",
              }}
            >
              <Button
                size="lg"
                variant="subtle"
                colorScheme="amber"
                width="81"
                height="20"
                onPress={() => {
                  navigation.navigate("Reviews");
                }}
              >
                <MaterialCommunityIcons
                  name="comment-processing-outline"
                  size={24}
                  color="black"
                />
              </Button>
            </Stack>

            <Stack
              mb="2.5"
              mt="1.5"
              direction={{
                base: "column",
                md: "row",
              }}
              space={2}
              mx={{
                base: "auto",
                md: "0",
              }}
            >
              <Button
                size="lg"
                variant="subtle"
                colorScheme="amber"
                width="210"
                height="12"
                onPress={() => {
                  navigation.navigate("ContactUs");
                }}
              >
                Contact Us
              </Button>
            </Stack>

            <Stack
              mb="2.5"
              mt="1.5"
              direction={{
                base: "column",
                md: "row",
              }}
              space={2}
              mx={{
                base: "auto",
                md: "0",
              }}
            >
              <Button
                size="lg"
                variant="subtle"
                colorScheme="amber"
                width="81"
                height="20"
                onPress={() => {
                  navigation.navigate("Rent");
                }}
              >
                <FontAwesome5 name="money-check" size={24} color="black" />
              </Button>
            </Stack>

            <Stack
              mb="2.5"
              mt="1.5"
              direction={{
                base: "column",
                md: "row",
              }}
              space={2}
              mx={{
                base: "auto",
                md: "0",
              }}
            >
              <Button
                size="lg"
                variant="subtle"
                colorScheme="amber"
                width="81"
                height="20"
                onPress={() => {
                  Linking.openURL("mailto:bycycletn@gmail.com");
                }}
              >
                <Feather name="mail" size={24} color="black" />
              </Button>
            </Stack>

            <Stack
              mb="2.5"
              mt="1.5"
              direction={{
                base: "column",
                md: "row",
              }}
              space={2}
              mx={{
                base: "auto",
                md: "0",
              }}
            >
              <Button
                size="lg"
                variant="subtle"
                colorScheme="amber"
                width="81"
                height="20"
                onPress={() => makePhoneCall()}
              >
                <Feather name="phone-call" size={24} color="black" />
              </Button>
            </Stack>

            <View style={tailwind("w-full mt-32")}>
              <Footer navigation={navigation} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
    // </TouchableOpacity>
  );
}

export default HomePage;
