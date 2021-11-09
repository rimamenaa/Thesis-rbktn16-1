import React from "react";
import {
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

function Rent({navigation}) {
  return (
    <View>
    <Card>
      <VStack space={50}>
        <ScrollView showsVerticalScrollIndicator={false} >

      {/* ----- Packages cards -----  */}

          <Text fontSize="4xl" color="amber.500">
            Choose your plan
          </Text>
          <SingleTrip></SingleTrip>
          <MonthlySub></MonthlySub>
          <AdventurePass></AdventurePass>
        </ScrollView>
      </VStack>
    </Card>

      {/* ----- Footer -----  */}
      
      <View style={{position: 'absolute', width: "100%",marginTop:655, backgroundColor:"white"}}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}
export default Rent;
