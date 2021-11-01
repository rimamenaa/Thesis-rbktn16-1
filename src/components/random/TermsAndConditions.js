import React from "react";
import {
  useBreakpointValue,
  VStack,
  Checkbox,
  NativeBaseProvider,
  Center,
  ScrollView,
} from "native-base";
import { View } from "react-native";

export const TermsAndConditions = () => {
  const flexDir = useBreakpointValue({
    base: "column",
    lg: "row",
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack py="8" space={8} justifyContent="center">
        <View style={{ flexDirection: flexDir }}>
          <Checkbox size="sm" value="tnc" justifyContent="center" mb="4">
            I agree to Terms and conditions
          </Checkbox>
        </View>
      </VStack>
    </ScrollView>
  );
};

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TermsAndConditions />
      </Center>
    </NativeBaseProvider>
  );
}
