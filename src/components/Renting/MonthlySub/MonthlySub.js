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
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MonthlySub() {
  const navigation = useNavigation();
  return (
    <Pressable
      style={{ margin: 20 }}
      onPress={() => {
        navigation.navigate("MonthlySubDetails");
      }}
      rounded="lg"
      overflow="hidden"
      width="72"
      shadow={1}
      _light={{ backgroundColor: "gray.200" }}
      _dark={{ backgroundColor: "gray.700" }}
    >
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            Monthly Membership
          </Heading>
          <Text
            fontSize="xs"
            _light={{ color: "amber.500" }}
            _dark={{ color: "amber.500" }}
            fontWeight="medium"
            ml="-0.5"
            mt="-1"
          >
            70 Tunisian Dinars per Month
          </Text>
        </Stack>
        <Text fontWeight="400">Month to month, cancel anytime.</Text>
      </Stack>
    </Pressable>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <MonthlySub />
      </Center>
    </NativeBaseProvider>
  );
}
