import React from "react";
import {
  useBreakpointValue,
  Text,
  VStack,
  ScrollView,
  Card,
  View
} from "native-base";

import AdventurePass from "./AdventurePass/AdventurePass";
import MonthlySub from "./MonthlySub/MonthlySub";
import SingleTrip from "./SingleTrip/SingleTrip";
import Footer from "../Footer/Footer";
import tw from "tailwind-react-native-classnames";


function Rent({navigation}) {
  const flexDir = useBreakpointValue({
    base: "column",
    lg: "row",
  });
  return (
    <View>
  
      <VStack>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={tw `items-center`}>
          <Text fontSize="2xl" fontWeight="bold" color="amber.500">
            Choose Your Plan
          </Text>
          </View>
          <SingleTrip></SingleTrip>
          <MonthlySub></MonthlySub>
          <AdventurePass></AdventurePass>
        </ScrollView>
      </VStack>

    <View style={{position: 'absolute', width: "100%",marginTop:655, backgroundColor:"white"}}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}
export default Rent;
