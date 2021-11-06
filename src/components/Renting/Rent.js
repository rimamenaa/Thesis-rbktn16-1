import React from "react";
import {
  useBreakpointValue,
  Text,
  VStack,
  ScrollView,
  Card,
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
    <Card>
      <VStack space={50}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text fontSize="4xl" color="amber.500">
            Choose your plan
          </Text>
          <SingleTrip></SingleTrip>
          <MonthlySub></MonthlySub>
          <AdventurePass></AdventurePass>
        </ScrollView>
      </VStack>
    </Card>
  );
}
export default Rent;
