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
      <VStack space={10}>
        <View style={{ margin: 100, paddingBottom: 20 }}>
          <SingleTrip></SingleTrip>
          <MonthlySub></MonthlySub>
          <AdventurePass></AdventurePass>
        </View>
      </VStack>
    </ScrollView>
  );
}
export default Rent;
