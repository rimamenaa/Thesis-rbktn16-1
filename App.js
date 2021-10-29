import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Commercial from "./src/components/commercial/Commercial";
import Test from "./src/components/suggestion roads/Test";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ye Heni w5aya rani faddit" component={Test} />
        <Stack.Screen name="Commercial" component={Commercial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
