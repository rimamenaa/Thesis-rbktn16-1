import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Commercial from "./src/components/commercial/Commercial";
import HomePage from "./src/components/HomePage/HomePage";
import Signup from "./src/components/signup/Signup";
import ContactUs from "./src/components/ContactUs/ContactUs";
import Station from "./src/components/Map/Station";
import Login from "./src/components/login/Login";
import Rules from "./src/components/rules/Rules";
import TestBase from "./src/components/TestNativeBase/TestBase";
import { NativeBaseProvider, extendTheme, theme as nbTheme } from "native-base";
import Reviews from "./src/components/ReviewsUser/Reviews";
import LandingPage from "./src/components/LandingPage/LandingPage";
import Rent from "./src/components/Renting/Rent";
import SingleTripDetails from "./src/components/Renting/SingleTrip/SingleTripDetails";
import SingleTrip from "./src/components/Renting/SingleTrip/SingleTrip";
import MonthlySub from "./src/components/Renting/MonthlySub/MonthlySub";
import MonthlySubDetails from "./src/components/Renting/MonthlySub/MonthlySubDetails";
import AdventurePass from "./src/components/Renting/AdventurePass/AdventurePass";
import AdventurePassDetails from "./src/components/Renting/AdventurePass/AdventurePassDetails";

const theme = extendTheme({
  colors: {
    primary: nbTheme.colors.gray,
  },
});
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="ContactUs" component={ContactUs} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Commercial" component={Commercial} />
          <Stack.Screen name="Rules" component={Rules} />
          <Stack.Screen name="Station" component={Station} />
          <Stack.Screen name="TestBase" component={TestBase} />
          <Stack.Screen name="Reviews" component={Reviews} />
          <Stack.Screen name="Rent" component={Rent} />
          <Stack.Screen name="SingleTrip" component={SingleTrip} />
          <Stack.Screen
            name="SingleTripDetails"
            component={SingleTripDetails}
          />
          <Stack.Screen name="MonthlySub" component={MonthlySub} />
          <Stack.Screen
            name="MonthlySubDetails"
            component={MonthlySubDetails}
          />
          <Stack.Screen name="AdventurePass" component={AdventurePass} />
          <Stack.Screen
            name="AdventurePassDetails"
            component={AdventurePassDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
