import React from "react";
import { NativeBaseProvider, Center, ScrollView } from "native-base";

import { Icon, useBreakpointValue, Text, VStack } from "native-base";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import call from "react-native-phone-call";

const args = {
  number: "+21622111222",
  prompt: false,
};
export const ByPhone = () => {
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
          as={<AntDesign name="phone" size={24} color="black" />}
          name="shield"
          size="sm"
          textAlign="center"
          _dark={{ color: "coolGray.800" }}
        />
        <Text
          fontSize="lg"
          textAlign="center"
          _dark={{ color: "coolGray.800" }}
          onPress={() => call(args).catch(console.error)}
        >
          Via Phone
        </Text>
      </VStack>
    </View>
  );
};

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ByPhone />
      </Center>
    </NativeBaseProvider>
  );
}
