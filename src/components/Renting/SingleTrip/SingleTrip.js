import React from "react";
import {
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  Pressable,
  Card,
} from "native-base";

import { useNavigation } from "@react-navigation/native";

function SingleTrip() {
  const navigation = useNavigation();
  return (
    <Pressable
      rounded="lg"
      overflow="hidden"
      width="72"
      shadow={1}
      _light={{ backgroundColor: "gray.200" }}
      _dark={{ backgroundColor: "gray.700" }}
      onPress={() => {
        navigation.navigate("SingleTripDetails");
      }}
      style={{ margin: 50 }}
    >
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            Single Trip
          </Heading>
          <Text
            fontSize="xs"
            _light={{ color: "amber.500" }}
            _dark={{ color: "amber.500" }}
            fontWeight="medium"
            ml="-0.5"
            mt="-1"
          >
            05 Tunisian Dinars per Hour
          </Text>
        </Stack>
        <Text fontWeight="400">Great for one-way rides.</Text>
      </Stack>
    </Pressable>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <SingleTrip />
      </Center>
    </NativeBaseProvider>
  );
}
