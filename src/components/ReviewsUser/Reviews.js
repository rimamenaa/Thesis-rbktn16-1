import React from "react";
import { useColorMode, ScrollView } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import Circuit1 from "./circuit1";
import Circuit2 from "./circuit2";
import Circuit3 from "./circuit3";
import Circuit4 from "./circuit4";
import Circuit5 from "./circuit5";

export default function Reviews(props) {
  return (
    <ScrollView>
      <Circuit1></Circuit1>
      <Circuit2></Circuit2>
      <Circuit3></Circuit3>
      <Circuit4></Circuit4>
      <Circuit5></Circuit5>
    </ScrollView>
  );
}
