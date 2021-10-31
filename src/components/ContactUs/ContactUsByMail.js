import React from "react";
import { NativeBaseProvider, Center, ScrollView } from "native-base";

import {
  Icon,
  useBreakpointValue,
  Text,
  Pressable,
  Heading,
} from "native-base";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const ByMail = () => {
  const flexDir = useBreakpointValue({
    base: "column",
    lg: "row",
  });

  return (
    <View style={{ flexDirection: flexDir }}>
      <Pressable
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
          as={<AntDesign name="mail" size={24} color="black" />}
          name="shield"
          size="sm"
          textAlign="center"
          _dark={{ color: "coolGray.800" }}
        />
        <Text
          fontSize="lg"
          textAlign="center"
          _dark={{ color: "coolGray.800" }}
        >
          Via Mail
        </Text>
      </Pressable>
    </View>
  );
};

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ByMail />
      </Center>
    </NativeBaseProvider>
  );
}
