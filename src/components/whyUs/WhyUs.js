import React, { useEffect, useState } from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import {
  HStack,
  Text,
  Box,
  Heading,
  AspectRatio,
  Image,
  Stack,
  Button,
} from "native-base";

import tailwind from "tailwind-rn";
import axios from "axios";
import { isSignedIn } from "../services/auth";

function WhyUs({ navigation }) {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://bycyclethesis.herokuapp.com/whybycycle")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  };
  useEffect(async () => {
    getData();
  }, []);

  const truth = isSignedIn;

  console.log(truth);
  return (
    <SafeAreaView style={tailwind("h-full")}>
      <ScrollView>
        <View style={tailwind("mt-6 items-center h-full")}>
          <View>
            <ScrollView>
              {data.map((e, key) => {
                return (
                  <View key={key}>
                    <Box
                      style={tailwind("mt-4")}
                      rounded="lg"
                      overflow="hidden"
                      width="350"
                      shadow={1}
                      _light={{ backgroundColor: "gray.50" }}
                      _dark={{ backgroundColor: "gray.700" }}
                    >
                      <Box >
                        <AspectRatio  ratio={1.1} style={tailwind("h-64")}>
                          <Image source={{ uri: e.photo ? e.photo: "null" }}    alt="image" />
                        </AspectRatio>
                      </Box>
                      <Stack p="4" space={3}>
                        <Stack space={2}>
                          <Heading size="lg" ml="-1">
                            {e.title}
                          </Heading>
                        </Stack>
                        <Text  style={tailwind("text-lg")}>{e.description}</Text>
                        <HStack
                          alignItems="center"
                          space={4}
                          justifyContent="space-between"
                        ></HStack>
                      </Stack>
                    </Box>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <Button
        style={tailwind("bg-yellow-500 h-12 w-full")}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        Lets Get Started
      </Button>
    </SafeAreaView>
  );
}

export default WhyUs;
