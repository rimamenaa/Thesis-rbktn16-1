import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Stack, Button } from "native-base";

import tailwind from "tailwind-rn";
import WhyUs from "../WhyUs/WhyUs"
import Footer from "../Footer/Footer";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

function Home({ navigation }) {
  return (
      <SafeAreaView style={tailwind("max-h-full")}>
        <ScrollView>
          <View
            style={tailwind(
              " min-w-full bg-transparent items-center mt-2 rounded-2xl flex "
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
<MaterialCommunityIcons name="comment-processing-outline" size={24} color="black" /> 
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
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}

export default Home;
