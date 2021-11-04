import React from "react"
import {
  Slide,
//   Button,
  Box,
  Input,
  Heading,
  VStack,
  HStack,
  Text,
  CheckIcon,
  Center,
  Button,
  NativeBaseProvider,
} from "native-base"
export const Payment = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Box
      width={{
        base: "75%",
        md: "50%",
      }}
      h="100%" // alignItems="flex-start"
      justifyContent="center"
    >
      <VStack space={4} w="100%">
        <HStack alignItems="flex-end">
          <Heading>Order</Heading>
        </HStack>
        <HStack alignItems="center" justifyContent="space-between">
          <Text fontWeight="medium">Sub Total</Text>
          <Text color="blueGray.400">$298.77</Text>
        </HStack>
        <HStack alignItems="center" justifyContent="space-between">
          <Text fontWeight="medium">Tax</Text>
          <Text color="blueGray.400">$38.84</Text>
        </HStack>
        <HStack alignItems="center" justifyContent="space-between">
          <Text fontWeight="medium">Total Amount</Text>
          <Text color="amber.600">$337.61</Text>
        </HStack>
        
        <Button
        colorScheme="yellow"
         my="2"
         onPress={() => setIsOpen(true)}>
          Place Order
        </Button>

      </VStack>
      <Slide in={isOpen} placement="bottom">
        <Box
          w="100%"
          position="absolute"
          bottom="16"
          p="2"
          borderRadius="xs"
          bg="amber.100"
          alignItems="center"
          justifyContent="center"
          _dark={{
            bg: "amber.200",
          }}
        >
          <HStack space={2}>
            <CheckIcon
              size="4"
              color="amber.600"
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
      <Center flex={1} px="3">
        <Payment />
      </Center>
    </NativeBaseProvider>
  )
}
