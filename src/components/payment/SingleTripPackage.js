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
  Image
} from "native-base";
import axios from "axios";
import {Alert} from "react-native"

import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";

export const SingleTripPackage = () => {
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
      alignItems="center"
    >
       <Image
          style={tw`w-24 h-24 mb-52`}
          source={require("../../../assets/LogoBike.png")}
          alt="image"
        />
      <VStack space={3} w="100%" marginBottom={150}>

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
              onSubmit();  navigation.navigate("SingleTripPayment");
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

    <NativeBaseProvider >
      <Center flex={1} px="3" backgroundColor={"white"}>
        <SingleTripPackage />
      </Center>
    </NativeBaseProvider>
  
  );
};
