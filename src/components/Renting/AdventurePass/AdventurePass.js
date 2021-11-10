import React from "react";
import {
  Heading,
  Text,
  Center,
  Stack,
  NativeBaseProvider,
  Pressable,
  View
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import { BlurView } from "expo-blur";

function AdventurePass() {
  const navigation = useNavigation();
  return (
            //   ----- Adventure Package Card ----- 
   <BlurView
     style={tw`w-4/5 h-32 my-6 rounded items-center`}
     intensity={100}
     tint="light"
     color="red"
   > 
    <Pressable
      onPress={() => {
        navigation.navigate("AdventurePassDetails");
      }}
      rounded="lg"
      overflow="hidden"
    >
      <Stack p="4" space={3} style={tw `items-center`}>
        <Stack space={2}>
          <Heading size="lg" ml="-1">
            Adventure Pass
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
            25 TND per Day
          </Text>
          </View>
        </Stack>
        <Text fontWeight="bold">Perfect for visitors and tourists</Text>
      </Stack>
    </Pressable>
    </BlurView>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <AdventurePass />
      </Center>
    </NativeBaseProvider>
  );
}
