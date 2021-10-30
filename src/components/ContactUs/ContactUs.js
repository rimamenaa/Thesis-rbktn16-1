
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
            >
              By Phone
            </Text>
          </VStack>
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
              By Mail
            </Text>
          </VStack>
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
      </VStack>
      {/* <View>
        <Loading></Loading>
      </View> */}
    </ScrollView>
  );
};

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ContactUs />
      </Center>
    </NativeBaseProvider>
  );
}
