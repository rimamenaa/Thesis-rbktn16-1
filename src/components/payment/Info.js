import React from "react";
import {
  Input,
  Box,
  Center,
  Heading,
  Stack,
  VStack,
  HStack,
  Slide,
  NativeBaseProvider,
  Button,
} from "native-base";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Info = () => {
  const navigation = useNavigation();

  return (
    <Box
      width={{
        base: "75%",
        md: "50%",
      }}
      h="100%" // alignItems="flex-start"
      justifyContent="center"
    >
      <VStack space={3} w="100%">
        <HStack alignItems="center">
          <Heading>Personal Information</Heading>
        </HStack>
        <Stack mt={3} space={4} alignItems="center">
          <Input  w="100%" variant="outline" placeholder="ID" />
          <Input  w="100%" variant="outline" placeholder="Phone Number" />
        </Stack>
        <Button
          colorScheme="yellow"
          my="2"
          onPress={() => {
            navigation.navigate("Payment");
          }}
        >
          Next
        </Button>
      </VStack>
    </Box>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Info />
      </Center>
    </NativeBaseProvider>
  );
};
