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
} from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Loading from "../../../../src/components/Loading/Loading";

function SingleTripDetails() {
  return (
    // <Box
    //   rounded="lg"
    //   overflow="hidden"
    //   width="30%"
    //   shadow={1}
    //   _light={{ backgroundColor: "gray.50" }}
    //   _dark={{ backgroundColor: "gray.700" }}
    // >
    <Box>
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
      <Stack p="4" space={6}>
        <Text fontWeight="500" fontWeight="400" marginTop="8">
          The Single Trip pass includes 30 minutes of ride time to get you
          anywhere you need to go. Ride to work, meet up with friends, or run a
          quick errand. Need to ride longer? It's just $2.95 for the first 30
          minutes and $2.50 for each additional 30 minutes.
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
    </Box>
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
