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

import { useNavigation } from "@react-navigation/native";

function AdventurePassDetails() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Box>
        <Text fontSize="2xl" marginBottom="3" marginLeft="3" marginTop="5">
          Adventure Pass
        </Text>
        <Text fontWeight="500" padding="3">
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
          <Text fontWeight="700" fontWeight="400" marginTop="10" padding="5">
            For just 25TD, you'll get 24 hours of access to BY-CYCLE and you can
            keep a bike out for up to 2 hours at a time. If you're enjoying a
            long ride and want to keep a bike out longer than 2 hours at a time,
            it's only an extra 2TND per additional 30 minutes. With BY-CYCLE, you
            can take a bike out from any station within the system and return it
            to any other.
          </Text>
        </Stack>
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
          navigation.navigate("AdventurePackage");
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
      {/* <Center flex={1} px="5"> */}
      <AdventurePassDetails />
      {/* </Center> */}
    </NativeBaseProvider>
  );
}
