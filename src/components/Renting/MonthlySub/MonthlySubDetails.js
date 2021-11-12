import React from "react";
import {
  Box,
  AspectRatio,
  Image,
  Text,
  NativeBaseProvider,
  Button,
  ScrollView,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

function MonthlySubDetails() {
  const navigation = useNavigation();
  return (
            //   ----- Monthly Package Card Details ----- 
    <ScrollView>
      <Box
       shadow={1}
       width="360"
       marginLeft={4}
       borderRadius={5}
       _light={{ backgroundColor: "gray.50" }}
       _dark={{ backgroundColor: "gray.700" }}>
        <Text fontSize="2xl" marginBottom="3" marginLeft="3" marginTop="5">
          Monthly Membership
        </Text>
        <Text fontWeight="500" padding="3">
          The Monthly Membership includes 30 days of BY-CYCLE access and is
          great for people looking for month-to-month flexibility.
        </Text>
        <AspectRatio ratio={16 / 9}>
          <Image
            marginTop="5"
            rounded="xs"
            height="100%"
            width="100%"
            source={require("../../../../assets/saveMoney.jpg")}
            alt={"Loading..."}
          />
        </AspectRatio>
        <Text fontWeight="500" fontWeight="400" marginTop="8" padding="5">
          When you become a member for 70TD per month, you'll get a key that
          unlocks thousands of bikes all over the country. You can even ride the
          very same day you sign up by using the BY-CYCLE mobile app to unlock a
          bike. You can take as many rides as you want while your membership is
          active, and the first 45 minutes of each ride are included in your
          plan.
        </Text>
      </Box>
      <Button
        colorScheme="yellow"
        fontSize="md"
        mt="4"
        _light={{ color: "amber.300" }}
        _dark={{ color: "amber.300" }}
        fontWeight="500"
        marginLeft="24"
        width="50%"
        onPress={() => {
          navigation.navigate("MonthlyPackage");
        }}
      >
        Get one
      </Button>
    </ScrollView>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <MonthlySubDetails />
    </NativeBaseProvider>
  );
}
