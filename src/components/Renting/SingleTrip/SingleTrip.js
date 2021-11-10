import React from "react";
import {
  Heading,
  Text,
  Center,
  Stack,
  NativeBaseProvider,
  Pressable,
  View,
} from "native-base";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";

function SingleTrip() {
  const navigation = useNavigation();
  return (
    //   ----- Single Package Card ----- 
    <BlurView
    style={tw`w-4/5 h-32 my-6 rounded items-center`}
    intensity={100}
    tint="light"
    color="red"
  > 
    <Pressable
      rounded="lg"
      overflow="hidden"
      onPress={() => {
        navigation.navigate("SingleTripDetails");
      }}
      // style={{ margin: 10 }}
    >
      <Stack p="4" space={3} style={tw `items-center`} >
    
        <Stack space={2}>
          <Heading size="lg" ml="-1">
            Single Trip
          </Heading>
          <View style={tw `items-center`}>
          <Text
            fontSize="md"
            _light={{ color: "orange.400" }}
            _dark={{ color: "orange.400" }}
            fontWeight="bold"
            ml="-0.5"
            mt="-1"
          >
            5 TND per Hour
          </Text>
          </View>
        </Stack>
        <Text fontWeight="bold">Great for one-way rides.</Text> 
      </Stack>
    </Pressable>
    </BlurView>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <SingleTrip />
      </Center>
    </NativeBaseProvider>
  );
}
