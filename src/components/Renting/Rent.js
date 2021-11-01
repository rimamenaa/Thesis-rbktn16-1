import React from "react";
import {
  useBreakpointValue,
  Text,
  VStack,
  NativeBaseProvider,
  Center,
  ScrollView,
} from "native-base";

import { View } from "native-base";

import AdventurePass from "./AdventurePass/AdventurePass";
import MonthlySub from "./MonthlySub/MonthlySub";
import SingleTrip from "./SingleTrip/SingleTrip";

function Rent() {
  const flexDir = useBreakpointValue({
    base: "column",
    lg: "row",
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack py="8" space={8} alignItems="center" justifyContent="center">
        <View style={{ flexDirection: flexDir }}>
          <AdventurePass></AdventurePass>
          <MonthlySub></MonthlySub>
          <SingleTrip></SingleTrip>
        </View>
      </VStack>
    </ScrollView>
  );
}
export default Rent;
