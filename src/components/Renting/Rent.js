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
    <Card>
      <VStack space={50}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <Text fontSize="4xl" color="amber.500">
            Choose your plan
          </Text>
          <SingleTrip></SingleTrip>
          <MonthlySub></MonthlySub>
          <AdventurePass></AdventurePass>
        </ScrollView>
      </VStack>
    </Card>
    <View style={{position: 'absolute', width: "100%",marginTop:655, backgroundColor:"white"}}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}
export default Rent;
