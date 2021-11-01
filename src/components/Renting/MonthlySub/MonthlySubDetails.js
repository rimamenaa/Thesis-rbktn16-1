import React from "react";
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Center,
  HStack,
  Stack,
  Text,
  Link,
  NativeBaseProvider,
  VStack,
  View,
} from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Loading from "../../../../src/components/Loading/Loading";

function AdventurePassDetails() {
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      width="40%"
      shadow={1}
      _light={{ backgroundColor: "gray.50" }}
      _dark={{ backgroundColor: "gray.700" }}
    >
      <Box>
        <Text fontSize="2xl" marginBottom="3">
          Monthly Membership
        </Text>
        <Text fontWeight="500">
          The Monthly Membership includes 30 days of Bluebikes access and is
          great for people looking for month-to-month flexibility.
        </Text>
        <AspectRatio ratio={16 / 9}>
          <Image
            marginTop="5"
            rounded="lg"
            height="100%"
            width="100%"
            source={require("../../../../assets/haveFun.jpg")}
            alt={"Loading..."}
          />
        </AspectRatio>
      </Box>
      <Stack p="4" space={6}>
        <Text fontWeight="500" fontWeight="400" marginTop="8">
          When you become a member for $25 per month, you'll get a key that
          unlocks thousands of bikes around Metro Boston. You can even ride the
          very same day you sign up by using the Bluebikes mobile app to unlock
          a bike.* You can take as many rides as you want while your membership
          is active, and the first 45 minutes of each ride are included in your
          plan. If you keep a bike out for longer than 45 minutes at a time,
          it's only an extra $2.50 per additional 30 minutes.
        </Text>
        <Stack space={2}>
          <Text
            fontSize="xs"
            _light={{ color: "amber.500" }}
            _dark={{ color: "amber.300" }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            Get one
          </Text>
        </Stack>
      </Stack>
    </Box>
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
