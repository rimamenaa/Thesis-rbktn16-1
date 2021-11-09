import React from "react";
import {
  Input,
  Box,
  Center,
  Heading,
  Stack,
  VStack,
  HStack,
  NativeBaseProvider,
  Button,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

export const Info = () => {
  const navigation = useNavigation();

  return (
                //   ----- Personal Information ----- 
    <Box
      width={{
        base: "100%",
        md: "50%",
      }}
      h="100%"
      justifyContent="center"
    >
      <VStack space={3} w="100%">

        <HStack alignItems="center">
          <Heading>Personal Information</Heading>
        </HStack>

        <Stack mt={3} space={4} alignItems="center">
          <Input  
          w="100%" 
          variant="outline" 
          placeholder="ID" 
          />
          <Input  
          w="100%" 
          variant="outline" 
          placeholder="Phone Number" 
          />
        </Stack>

        <Button
          colorScheme="yellow"
          my="2"
          onPress={() => {
            navigation.navigate("MonthlyPayment");
          }}
        >
          Next
        </Button>

      </VStack>
    </Box>
  );
};

export default () => {
  return (

    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Info />
      </Center>
    </NativeBaseProvider>
  
  );
};
