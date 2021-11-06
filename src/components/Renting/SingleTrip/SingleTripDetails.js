import React from "react";
import {
  Box,
  AspectRatio,
  Image,
  Center,
  Text,
  Button,
  NativeBaseProvider,
  ScrollView,
} from "native-base";

function SingleTripDetails() {
  return (
    <ScrollView>
      <Box>
        <Text fontSize="2xl" marginBottom="3" marginLeft="3" marginTop="5">
          Single Trip
        </Text>
        <Text fontWeight="500" padding="3">
          Great for spontaneous, one-way trips.
        </Text>
        <AspectRatio ratio={16 / 9}>
          <Image
            marginTop="1"
            rounded="lg"
            height="100%"
            width="100%"
            source={require("../../../../assets/haveFun.jpg")}
            alt={"Loading..."}
          />
        </AspectRatio>
        <Text fontWeight="500" fontWeight="400" marginTop="8" padding="3">
          The
          <Text bold> Single Trip </Text>
          pass includes 60 minutes of ride time to get you anywhere you need to
          go. Ride to work, meet up with friends, or run a quick errand. Need to
          ride longer? It's just 3TD for each additional 30 minutes.
        </Text>
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
      <SingleTripDetails />
    </NativeBaseProvider>
  );
}
