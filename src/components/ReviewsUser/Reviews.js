import React from "react";
import { useColorMode, ScrollView, View } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import Circuit1 from "./circuit1";
import Circuit2 from "./circuit2";
import Circuit3 from "./circuit3";
import Circuit4 from "./circuit4";
import Circuit5 from "./circuit5";
import Footer from "../Footer/Footer";

export default function Reviews({navigation}) {
  return (
    <View>
    <ScrollView marginBottom="20">
      <Circuit1 ></Circuit1>
      {/* <Circuit2></Circuit2>
      <Circuit3></Circuit3>
      <Circuit4></Circuit4>
      <Circuit5></Circuit5> */}
    </ScrollView>
    <View style={{position: 'absolute', width: "95%",marginLeft:10 , marginTop:655, backgroundColor:"white"}}>
        <Footer navigation={navigation} />
      </View>
  </View>
  );
}
