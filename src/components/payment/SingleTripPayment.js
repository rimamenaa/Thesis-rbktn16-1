import React from "react"
import {
  Slide,
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  CheckIcon,
  Center,
  Button,
  NativeBaseProvider,
  View
} from "native-base"
import {
  Linking,
} from "react-native";
import Footer from "../Footer/Footer";
import { useNavigation } from "@react-navigation/native";

export const Payment = () => {  
  const navigation = useNavigation();

  const [isOpen, setIsOpen] = React.useState(false)
  return (
            //   ----- Payment Details ----- 
    <Box
      width={{
        base: "100%",
        md: "50%",
      }}
      h="100%"
      justifyContent="center"
    >
      <VStack space={4} w="100%">

        <HStack alignItems="flex-end">
          <Heading>Order</Heading>
        </HStack>
        
        <HStack 
        alignItems="center" 
        justifyContent="space-between">
          <Text fontWeight="medium">Duration</Text>
          <Text color="blueGray.400">60 mins</Text>
        </HStack> 
        
   
        <HStack 
        alignItems="center" 
        justifyContent="space-between">
          <Text fontWeight="medium">Total Amount</Text>
          <Text color="amber.600">2.5 TND</Text>
        </HStack>
        
        <Button
        colorScheme="yellow"
         my="2"
        //  onPress={() => setIsOpen(true)}
        onPress={ ()=>{ Linking.openURL('https://api.preprod.konnect.network/kWANK_JrW')}} 

         >
          Place Order
        </Button>
        <View style={{position: 'absolute', width: "100%",marginTop:420, backgroundColor:"white"}}>
        <Footer navigation={navigation} />
      </View>
      </VStack>

      <Slide in={isOpen} placement="bottom">

        <Box
          w="100%"
          position="absolute"
          bottom="24"
          p="2"
          borderRadius="xs"
          bg="green.300"
          alignItems="center"
          justifyContent="center"
          _dark={{
            bg: "amber.200",
          }}
        >
          <HStack space={2}>
            <CheckIcon
              size="4"
              color="green.800"
              mt="1"
              _dark={{
                color: "amber.700",
              }}
            />
            <Text
              color="gray.600"
              textAlign="center"
              _dark={{
                color: "gray.700",
              }}
              fontWeight="medium"
            >
              Your Order Has Been Successfully Placed. Have A Safe Ride!
            </Text>
          </HStack>

        </Box>
      </Slide>
    </Box>
 
  )
}

export default () => {
  return (

    <NativeBaseProvider>
      <Center flex={1} px="3" backgroundColor="white">
        <Payment />
      </Center>
    </NativeBaseProvider>
  
  )
}
