import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Commercial from "./src/components/commercial/Commercial";
import HomePage from "./src/components/Homepage/HomePage";
import Signup from "./src/components/signup/Signup";
import CombinedMap from "./src/components/CombinedMap/CombinedMap";
import Login from "./src/components/login/Login";
import Rules from "./src/components/rules/Rules";
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
import SuggestedRoutes from "./src/components/suggestionroads/SuggestedRoutes";
import Station from "./src/components/Map/Station";
import AboutBikes from "./src/components/aboutBikes/AboutBikes";
import WhyUs from "./src/components/whyUs/WhyUs";
import SingleTripPayment from "./src/components/payment/SingleTripPayment";
import SingleTripPackage from "./src/components/payment/SingleTripPackage";
import MonthlyPayment from "./src/components/payment/MonthlyPayment";
import MonthlyPackage from "./src/components/payment/MonthlyPackage";
import AdventurePayment from "./src/components/payment/AdventurePayment";
import AdventurePackage from "./src/components/payment/AdventurePackage";
import AdultBikes from "./src/components/aboutBikes/AdultBikes";
import KidBikes from "./src/components/aboutBikes/KidBikes";
import Bikes from "./src/components/Bikes/Bikes";
import AdultsBikes from "./src/components/Bikes/AdultsBikes";
import KidsBikes from "./src/components/Bikes/KidsBikes";
import PaymentKonnect from "./src/components/paymentKonnect/PaymentKonnect";

import { ActivityIndicator } from "react-native-paper";
import { AuthContext } from "./src/components/context/context";
import { View } from "native-base";

const theme = extendTheme({
  colors: {
    primary: nbTheme.colors.gray,
  },
});
const Stack = createNativeStackNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = React.useMemo(
    () => ({
      signIn: () => {
        setUserToken("jhfs");
        setIsLoading(false);
      },
      singOut: () => {
        setUserToken(null);
        setIsLoading(false);
      },
      singUp: () => {
        setUserToken("fgkj");
        setIsLoading(false);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <NativeBaseProvider>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      </NativeBaseProvider>
    );
  } else
    return (
      <NativeBaseProvider theme={theme}>
        {/* <AuthContext.Provider value={authContext}>
          {userToken !== null ? ( */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="LandingPage"
              options={{ headerShown: false }}
              component={LandingPage}
            />
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={HomePage}
            />

            <Stack.Screen
              name="Commercial"
              component={Commercial}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WhyUs"
              component={WhyUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rent"
              component={Rent}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="CombinedMap" component={CombinedMap} />
            <Stack.Screen name="Rules" component={Rules} />
            <Stack.Screen name="Reviews" component={Reviews} />
            <Stack.Screen
              name="Login"
              options={{ headerShown: false }}
              component={Login}
            />
            <Stack.Screen
              name="Signup"
              options={{ headerShown: false }}
              component={Signup}
            />
            <Stack.Screen name="SingleTrip" component={SingleTrip} />
            <Stack.Screen name="AboutBikes" component={AboutBikes} />
            <Stack.Screen name="Bikes" component={Bikes} />

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
            <Stack.Screen name="SuggestedRoutes" component={SuggestedRoutes} />
            <Stack.Screen
              name="SingleTripPayment"
              component={SingleTripPayment}
            />
            <Stack.Screen
              name="SingleTripPackage"
              component={SingleTripPackage}
            />
            <Stack.Screen name="MonthlyPayment" component={MonthlyPayment} />
            <Stack.Screen name="MonthlyPackage" component={MonthlyPackage} />
            <Stack.Screen
              name="AdventurePayment"
              component={AdventurePayment}
            />
            <Stack.Screen
              name="AdventurePackage"
              component={AdventurePackage}
            />
            <Stack.Screen name="AdultBikes" component={AdultBikes} />
            <Stack.Screen name="KidBikes" component={KidBikes} />
            <Stack.Screen name="AdultsBikes" component={AdultsBikes} />
            <Stack.Screen name="KidsBikes" component={KidsBikes} />

            <Stack.Screen name="Station" component={Station} />
            <Stack.Screen name="PaymentKonnect" component={PaymentKonnect} />

          </Stack.Navigator>
        </NavigationContainer>
        {/* )}
        </AuthContext.Provider> */}
      </NativeBaseProvider>
    );
}

export default App;
