import React, { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";

export const PaymentKonnect = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");  
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  const onChangeFirstNameHandler = (firstName) => {
    setFirstName(firstName);
  };
  const onChangeLastNameHandler = (lastName) => {
    setLastName(lastName);
  };
  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };
  const onChangePhoneNumberHandler = (phoneNumber) => {
    setPhoneNumber(phoneNumber);
  };



  // const onSubmit = async (event) => {
  //   try {
  //     const response = await axios.post(`http://localhost:3000/payment`, {
  //       firstName,
  //       lastName,
  //       email,
  //       phoneNumber
  //     });
  //     if (response.status === 201) {
  //       alert(` You have created: ${JSON.stringify(response.data)}`);
  //       // setIsLoading(false);
  //       setFirstName('');
  //       setLastName('');
  //       setEmail('');
  //       setPhoneNumber('');
  //     } else {
  //       throw new Error("An error has occurred");
  //     }
  //   } catch (error) {
  //     console.log("An error has occurred", error);
  //     // setIsLoading(false);    
  //     console.log(JSON.stringify(response.data))

  //   }
  // };

  const onSubmit = () => {
    axios
      .post('http://localhost:3000/payment', {
        firstName,
        lastName,
        email,
        phoneNumber
      })
      .then(function (response) {
        // handle success
        console.log('then', JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log('error catch', error.message);
        console.log('info', firstName, lastName, email, phoneNumber);
      });
  };


  return (
                //   ----- Payment Information ----- 
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
          <Heading>Payment Information</Heading>
        </HStack>

        <Stack mt={3} space={4} alignItems="center">

          <Input  
          w="100%" 
          variant="outline" 
          placeholder="Firstname" 
          onChangeText={onChangeFirstNameHandler}
          />

          <Input  
          w="100%" 
          variant="outline" 
          placeholder="Lastname" 
          onChangeText={onChangeLastNameHandler}
          />

           <Input  
          w="100%" 
          variant="outline" 
          placeholder="Email" 
          onChangeText={onChangeEmailHandler}
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
          onPress={onSubmit}

          // onPress={() => {
          //   navigation.navigate("SingleTripPayment");
          // }}
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
        <PaymentKonnect />
      </Center>
    </NativeBaseProvider>
  
  );
};
