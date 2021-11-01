import React from "react";

import {
  useBreakpointValue,
  Text,
  VStack,
  NativeBaseProvider,
  Center,
  ScrollView,
} from "native-base";
import { View } from "react-native";
import FindUs from "./FindUs";
import { ByMail } from "./ContactUsByMail";
import { ByPhone } from "./ContactUsByPhone";
import { TermsAndConditions } from "../random/TermsAndConditions";

import Rent from "../Renting/Rent";

export const ContactUs = () => {
  const flexDir = useBreakpointValue({
    base: "column",
    lg: "row",
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack py="8" space={8} alignItems="center" justifyContent="center">
        <View style={{ flexDirection: flexDir }}>
          <ByPhone></ByPhone>
          <ByMail></ByMail>
          <FindUs></FindUs>
        </View>
        {/* <TermsAndConditions></TermsAndConditions> */}
        {/* <MonthlySub></MonthlySub>
        <AdventurePass></AdventurePass>
        <SingleTrip></SingleTrip> */}
        {/* <AdventurePassDetails></AdventurePassDetails> */}
        <Rent></Rent>
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
