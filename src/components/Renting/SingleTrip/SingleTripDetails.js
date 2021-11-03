import React from "react";
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Center,
  HStack,
  Stack,
  Text,
  Link,
  NativeBaseProvider,
  VStack,
  View,
  Card,
  ScrollView,
} from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Loading from "../../../../src/components/Loading/Loading";
import { Pressable } from "react-native";

function SingleTripDetails() {
  return (
    <ScrollView>
      <Card>
        <Text fontSize="2xl" marginBottom="3">
          Single Trip
        </Text>
        <Text fontWeight="500">Great for spontaneous, one-way trips.</Text>
        <AspectRatio ratio={16 / 9}>
          <Image
            marginTop="1"
            rounded="lg"
            height="100%"
            width="100%"
            source={require("../../../../assets/haveFun.jpg")}
            alt={"Loading..."}
          />
        </AspectRatio>
        <Stack p="4" space={4}>
          <Text fontWeight="500" fontWeight="400" marginTop="8">
            The
            <Text bold> Single Trip </Text>
            pass includes 60 minutes of ride time to get you anywhere you need
            to go. Ride to work, meet up with friends, or run a quick errand.
            Need to ride longer? It's just 3TD for each additional 30 minutes.
          </Text>
          <Stack space={2}>
            <Text
              fontSize="xs"
              _light={{ color: "amber.500" }}
              _dark={{ color: "amber.300" }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              Get one
            </Text>
          </Stack>
        </Stack>
      </Card>
    </ScrollView>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <SingleTripDetails />
      </Center>
    </NativeBaseProvider>
  );
}


