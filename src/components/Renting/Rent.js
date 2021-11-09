import React from "react";
import {
  Text,
  VStack,
  ScrollView,
  Card,
  View,
} from "native-base";
import {
  ImageBackground,
} from "react-native";
import AdventurePass from "./AdventurePass/AdventurePass";
import MonthlySub from "./MonthlySub/MonthlySub";
import SingleTrip from "./SingleTrip/SingleTrip";
import Footer from "../Footer/Footer";
import tw from "tailwind-react-native-classnames";

function Rent({navigation}) {
  return (
    <ImageBackground style={tw`w-full h-full`} source={require("../../../assets/RentImage.jpg")}>
    <View style={tw`mt-24`}>
      
      <VStack>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <View style={tw `items-center`}>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Choose Your Plan
          </Text>
          </View> */}
          <SingleTrip></SingleTrip>
          <MonthlySub></MonthlySub>
          <AdventurePass></AdventurePass>
        </ScrollView>
      </VStack>

    <View style={{position: 'absolute', width: "100%",marginTop:655, backgroundColor:"white"}}>
        <Footer navigation={navigation} />
      </View>
    </View>
    </ImageBackground>
  );
}
export default Rent;
