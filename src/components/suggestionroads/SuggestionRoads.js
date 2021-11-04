import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import {
  HStack,
  Text,
  Box,
  Heading,
  AspectRatio,
  Image,
  Stack,
} from "native-base";
import tailwind from "tailwind-rn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";

function SuggestionRoads() {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("http://localhost:3000/suggestion").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };
  useEffect(async () => {
    getData();
  }, []);

  return (
    <SafeAreaView style={tailwind("h-full")}>
      <ScrollView>
        <View style={tailwind("items-center mt-8")}>
          <Box
            style={tailwind("mb-8 items-center")}
            rounded="lg"
            overflow="hidden"
            width="80"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Bored of riding the same old routes? Struggling for
                  inspiration on how to find new roads to ride? Let us help you!
                </Heading>
              </Stack>

              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              ></HStack>
            </Stack>
          </Box>

          {data.map((e, key) => {
            return (
              <View key={key}>
                <Box
                  style={tailwind("w-full items-center mb-8")}
                  rounded="lg"
                  overflow="hidden"
                  width="80"
                  shadow={1}
                  _light={{ backgroundColor: "gray.50" }}
                  _dark={{ backgroundColor: "gray.700" }}
                >
                  <Box>
                    <AspectRatio ratio={0.79} height={200}>
                      <Image source={{ uri: e.photo }} alt="image" />
                    </AspectRatio>
                  </Box>
                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading size="md" ml="-1">
                        <Entypo name="location-pin" size={24} color="black" />{" "}
                        {e.location}
                      </Heading>
                    </Stack>
                    <Text fontWeight="400">
                      <FontAwesome5 name="clock" size={24} color="black" />{" "}
                      Duration: {e.duration}{" "}
                      <MaterialCommunityIcons
                        name="map-marker-distance"
                        size={24}
                        color="black"
                      />
                      Distance: {e.distance}
                    </Text>
                  </Stack>
                  <Text
                    style={tailwind("ml-6 mr-8 mb-8")}
                    color="gray.600"
                    fontWeight="400"
                  >
                    {e.description}{" "}
                  </Text>
                </Box>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SuggestionRoads;
