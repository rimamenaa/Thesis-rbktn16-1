import React from "react";
import {
  Icon,
  useBreakpointValue,
  Text,
  Pressable,
  NativeBaseProvider,
  Center,
} from "native-base";
import { Linking, Platform, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import call from "react-native-phone-call";

const args = {
  number: "+21622111222",
  prompt: false,
};

const makePhoneCall = () => {
  if (Platform.OS === "android") {
    Linking.openURL("tel:0021622111333");
  } else {
    Linking.openURL("telprompt:0021622111333");
  }
};
export const ByPhone = () => {
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
        onPress={() => makePhoneCall()}
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
        >
          Via Phone
        </Text>
      </Pressable>
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
