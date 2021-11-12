import React, { useState }  from "react";
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
import axios from "axios";
import {Alert} from "react-native"

import { useNavigation } from "@react-navigation/native";

export const Info = () => {
  const navigation = useNavigation();
  const [id, setId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onChangeIdHandler = (id) => {
    setId(id);
  };
  const onChangePhoneNumberHandler = (phoneNumber) => {
    setPhoneNumber(phoneNumber);
  };

  const onSubmit = () => {
    axios
      .post('http://localhost:3000/pi', {
        id,
        phoneNumber
      })
      .then(function (response) {
        // handle success
        console.log('then', JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log('error catch', error.message);
        console.log('info', id, phoneNumber);
      });
  };
  
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
          onChangeText={onChangeIdHandler}

          />
          <Input  
          w="100%" 
          variant="outline" 
          placeholder="Phone Number" 
          onChangeText={onChangePhoneNumberHandler}

          />
        </Stack>

        <Button
          colorScheme="yellow"
          my="2"
          onPress={() => {
            if ( id.length < 8 || phoneNumber.length < 8) {
              alert("Please type valid inputs!");
            } else {
              onSubmit();  navigation.navigate("AdventurePayment");
            }
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
