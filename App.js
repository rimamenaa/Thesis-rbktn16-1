import React from "react";
<<<<<<< HEAD
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/components/Homepage/Home";
import { NativeRouter, Switch, Route } from "react-router-native";
import Map from "./src/components/Map/Map";
export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Map></Map>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: "#484848	",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
=======
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Commercial from "./src/components/commercial/Commercial";
import Test from "./src/components/suggestion roads/Test";
import Signup from "./src/components/signup/Signup";
import ContactUs from "./src/components/ContactUs/ContactUs";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ye Heni w5aya rani faddit" component={Test} />
        <Stack.Screen name="Commercial" component={Commercial} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
>>>>>>> 5651131f5f0d3baa79e31367d688d8ee9dc2301f
