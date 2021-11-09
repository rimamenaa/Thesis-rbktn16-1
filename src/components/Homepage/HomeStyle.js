import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Linking,
  Platform
} from "react-native";

import { Stack, Button } from "native-base";

import tailwind from "tailwind-rn";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

import { Feather } from "@expo/vector-icons";

function Home({ navigation }) {
  const makePhoneCall = () => {
    if (Platform.OS === "android") {
      Linking.openURL("tel:0021622111333");
    } else {
      Linking.openURL("telprompt:0021622111333");
    }
  };
  return (
      <SafeAreaView style={tailwind("max-h-full")}>
          <View
            style={tailwind(
              " min-w-full bg-transparent items-center rounded-2xl flex "
            )}
          >
            <View  style={tailwind("flex flex-row")}>
            <Stack
              mr="12"
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
                variant="solid"
                style={tailwind("bg-yellow-300")}
                width="100"
                height="24"
                onPress={() => {
                  navigation.navigate("AboutBikes");
                }}
              >
<MaterialCommunityIcons name="bike" size={35} color="black" /> 
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
                variant="solid"
                style={tailwind("bg-yellow-300")}
                width="100"
                height="24"
                onPress={() => {
                  navigation.navigate("SuggestedRoutes");
                }}
              >
                <FontAwesome5 name="route" size={35} color="black" />
              </Button>
            </Stack>
            </View>

            <View  style={tailwind("flex flex-row mt-4")}>
            <Stack
              mr="12"
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
                variant="solid"
                style={tailwind("bg-yellow-300")}
                width="100"
                height="24"
                onPress={() => {
                  navigation.navigate("Station");
                }}
              >
<Entypo name="location" size={35} color="black" /> 
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
                variant="solid"
                style={tailwind("bg-yellow-300")}
                width="100"
                height="24"
                onPress={() => {
                  navigation.navigate("Reviews");
                }}
              >
<MaterialCommunityIcons name="comment-processing-outline" size={35} color="black" /> 
             </Button>
            </Stack>
            </View>

            <View  style={tailwind("flex flex-row mt-4")}>
            <Stack
              mr="12"
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
                variant="solid"
                style={tailwind("bg-yellow-300")}
                width="100"
                height="24"
                onPress={() => {
                  navigation.navigate("Rules");
                }}
              >
               <MaterialIcons name="rule-folder" size={35} color="black" />
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
                variant="solid"
                style={tailwind("bg-yellow-300")}
                width="100"
                height="24"
                onPress={() => {
                  navigation.navigate("Rent");
                }}
              >
                <FontAwesome5 name="money-check" size={24} color="black" />
              </Button>
            </Stack>
                </View>

               
          </View>

          <View  style={tailwind("flex flex-row mt-24 items-center")}>
            <Stack
              mr="2"
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
                width="160"
                height="12"
                colorScheme="indigo"
                onPress={() => {
                  Linking.openURL("mailto:bycycletn@gmail.com");
                }}
              >
                <MaterialCommunityIcons name="gmail" size={30} color="black" />
              </Button>  
            </Stack>

            <Stack
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
                colorScheme="green"
                width="160"
                height="12"
                onPress={() => makePhoneCall()}
              >
                <Feather name="phone-call" size={24} color="black" />
              </Button>
            </Stack>
            </View>
      </SafeAreaView>
  );
}

export default Home;
