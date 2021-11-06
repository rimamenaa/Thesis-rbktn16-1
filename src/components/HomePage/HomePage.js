import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import {
  Stack,
  Button
} from 'native-base'

import tailwind from "tailwind-rn";
import Footer from "../Footer/Footer"

function HomePage({ navigation }) {
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
            width="210"
            height="12"
            onPress={() => {
              navigation.navigate("AboutBikes");
            }} 
          >
            Bikes
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
            width="210"
            height="12"
            onPress={() => {
              navigation.navigate("SuggestedRoutes");
            }} 
          >
            Suggested Routes
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
              navigation.navigate("Station");
            }} 
          >
            Station
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
              navigation.navigate("Reviews");
            }} 
          >
            Reviews
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
            width="210"
            height="12"
            onPress={() => {
              navigation.navigate("Rent");
            }} 
          >
            Rent
          </Button>
        </Stack>

{/* <Stack
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
              navigation.navigate("Info");
            }} 
          >
            Info
          </Button>
        </Stack> */}
       
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

