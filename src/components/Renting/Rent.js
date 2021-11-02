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
      <VStack
        py="8"
        space={10}
        alignItems="center"
        justifyContent="space-between"
      >
        <View py="6">
          <SingleTrip></SingleTrip>
          <MonthlySub></MonthlySub>
          <AdventurePass></AdventurePass>
        </View>
      </VStack>
    </ScrollView>
  );
}
export default Rent;
