import React from "react";
import {
  Box,
  AspectRatio,
  Image,
  Center,
  Stack,
  Text,
  NativeBaseProvider,
  Card,
  ScrollView,
  Button,
} from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Loading from "../../../../src/components/Loading/Loading";

function AdventurePassDetails() {
  return (

    <ScrollView>
      <Box>
        <Text fontSize="2xl" marginBottom="3">
          Adventure Pass
        </Text>
        <Text fontWeight="500">
          The Adventure Pass is perfect for tourists, visitors, and anyone
          looking for a long or leisurely ride .
        </Text>
        <AspectRatio ratio={16 / 9}>
          <Image
            marginTop="5"
            rounded="lg"
            height="100%"
            width="100%"
            source={require("../../../../assets/cityBike2.jpg")}
            alt={"Loading..."}
          />
        </AspectRatio>
        <Stack space={500}>
          <Text fontWeight="500" fontWeight="400" marginTop="10">
            For just 25TD, you'll get 24 hours of access to By-Cycle and you can
            keep a bike out for up to 2 hours at a time. If you're enjoying a
            long ride and want to keep a bike out longer than 2 hours at a time,
            it's only an extra 3TD per additional 30 minutes. With By-Cycle, you
            can take a bike out from any station within the system and return it
            to any other.
          </Text>
        </Stack>
      </Box>
      <Button
        colorScheme="amber"
        fontSize="md"
        mt="4"
        _light={{ color: "amber.500" }}
        _dark={{ color: "amber.300" }}
        fontWeight="500"
      >
        Get one
      </Button>
    </ScrollView>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <AdventurePassDetails />
      </Center>
    </NativeBaseProvider>
  );
}
