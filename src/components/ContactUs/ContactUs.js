import React from "react";
import {
  Factory,
  Button,
  Stack,
  NativeBaseProvider,
  Center,
  ScrollView,
} from "native-base";

import { EvilIcons } from "@expo/vector-icons";
import { Icon, useBreakpointValue, Text, VStack, Heading } from "native-base";
import { FontAwesome, Foundation, Feather, mail } from "@expo/vector-icons";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Loading from "../Loading/Loading";
import call from "react-native-phone-call";

import FindUs from "./FindUs";
import { ByMail } from "./ContactUsByMail";
import { ByPhone } from "./ContactUsByPhone";

const args = {
  number: "+21622111222",
  prompt: false,
};
export const ContactUs = () => {
  const flexDir = useBreakpointValue({
    base: "column",
    lg: "row",
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack py="8" space={8} alignItems="center" justifyContent="center">
        <Heading>Contact us</Heading>

        <View style={{ flexDirection: flexDir }}>
          <ByPhone></ByPhone>
          <ByMail></ByMail>
          <FindUs></FindUs>
        </View>
      </VStack>
    </ScrollView>
  );
};

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ContactUs />
      </Center>
    </NativeBaseProvider>
  );
}
