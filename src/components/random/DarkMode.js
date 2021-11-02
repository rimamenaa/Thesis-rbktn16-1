import React from "react";
import {
  Heading,
  useColorMode,
  Button,
  HStack,
  Avatar,
  Center,
  useColorModeValue,
  Text,
  NativeBaseProvider,
} from "native-base";

function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center flex={1} bg={useColorModeValue("warmGray.50", "coolGray.800")}>
      <Text fontSize="lg" display="flex" mb={20}>
        The active color mode is{" "}
        <Text bold fontSize="18px">
          {useColorModeValue("Light", "Dark")}
        </Text>
      </Text>
      <Button onPress={toggleColorMode}>Toggle</Button>
    </Center>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <DarkMode />
    </NativeBaseProvider>
  );
}
