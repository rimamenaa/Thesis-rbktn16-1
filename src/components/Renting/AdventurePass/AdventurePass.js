import React from "react";
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  Pressable,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

function AdventurePass() {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("AdventurePassDetails");
      }}
      rounded="lg"
      overflow="hidden"
      width="72"
      shadow={1}
      _light={{ backgroundColor: "gray.200" }}
      _dark={{ backgroundColor: "gray.700" }}
      style={{ margin: 20 }}
    >
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            Adventure Pass
          </Heading>
          <Text
            fontSize="xs"
            _light={{ color: "amber.500" }}
            _dark={{ color: "amber.500" }}
            fontWeight="medium"
            ml="-0.5"
            mt="-1"
          >
            25 Tunisian Dinars per Day
          </Text>
        </Stack>
        <Text fontWeight="400">Perfect for visitors and tourists</Text>
      </Stack>
    </Pressable>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <AdventurePass />
      </Center>
    </NativeBaseProvider>
  );
}
