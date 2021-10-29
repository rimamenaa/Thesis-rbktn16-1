import React from "react";
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
