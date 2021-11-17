import React from "react";
import { useColorMode, ScrollView, View } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import Circuit1 from "./circuit1";

import Footer from "../Footer/Footer";

export default function Reviews({ navigation }) {
  return (
    <View>
      <ScrollView marginBottom="20">
        <Circuit1 />
      </ScrollView>
      <View
        style={{
          position: "absolute",
          width: "100%",
          marginTop: 740,
          backgroundColor: "white",
        }}
      >
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}
