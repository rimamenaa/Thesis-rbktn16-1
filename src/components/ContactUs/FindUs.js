import React from "react";
import { NativeBaseProvider, Center } from "native-base";

import { EvilIcons } from "@expo/vector-icons";
import { Icon, useBreakpointValue, Text, VStack } from "native-base";
import { View } from "react-native";

export const FindUs = () => {
  const flexDir = useBreakpointValue({
    base: "column",
    lg: "row",
  });

  return (
    <View style={{ flexDirection: flexDir }}>
      <VStack
        m="3"
        w="140"
        borderRadius="xl"
        p="3"
        bg="amber.400"
        space={2}
        alignItems="center"
        justifyContent="center"
      >
        <Icon
          as={<EvilIcons name="location" size={24} color="black" />}
          name="clock"
          size="sm"
          textAlign="center"
          _dark={{ color: "coolGray.800" }}
        />
        <Text
          fontSize="lg"
          textAlign="center"
          _dark={{ color: "coolGray.800" }}
        >
          Our Office
        </Text>
      </VStack>
    </View>
  );
};

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FindUs />
      </Center>
    </NativeBaseProvider>
  );
}
