import React from "react";
import {
  Heading,
  Text,
  Center,
  Stack,
  NativeBaseProvider,
  Pressable,
  View
} from "native-base";

import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";

function MonthlySub() {
  const navigation = useNavigation();
  return (
            //   ----- Monthly Package Card Details ----- 
    <Pressable
      style={{ margin: 20 }}
      onPress={() => {
        navigation.navigate("MonthlySubDetails");
      }}
      rounded="lg"
      overflow="hidden"
      width="72"
      shadow={1}
      _light={{ backgroundColor: "white" }}
      _dark={{ backgroundColor: "white" }}
    >
      <Stack p="4" space={3} style={tw `items-center`}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            Monthly Membership
          </Heading>
          <View style={tw `items-center`}>
          <Text
            fontSize="xs"
            _light={{ color: "amber.500" }}
            _dark={{ color: "amber.500" }}
            fontWeight="medium"
            ml="-0.5"
            mt="-1"
          >
            70 TND per Month
          </Text>
          </View>
        </Stack>
        <Text fontWeight="400">Month to month, cancel anytime.</Text>
      </Stack>
    </Pressable>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <MonthlySub />
      </Center>
    </NativeBaseProvider>
  );
}
