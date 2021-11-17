import React from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Icon,
  HStack,
  Center,
  Pressable,
} from "native-base";
import {
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
  AntDesign,
  FontAwesome
} from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { signOut } from "../services/auth";
export default function Footer({ navigation }) {
  const [selected] = React.useState(1);

  
  return (
    <NativeBaseProvider>
      <Box flex={1} safeAreaTop style={tw`w-full border-2 border-gray-300 rounded`}>
        <Center flex={1}></Center>
        <HStack alignItems="center" safeAreaBottom>
          <Pressable
            opacity={selected === 2 ? 1 : 0.6}
            color="black"
            py="2"
            flex={1}
            onPress={() => {
              navigation.navigate("Commercial");
            }}
          >
            <Center>
            <FontAwesome name="star-o" size={35} color="#403F3F" />
              <Text color="#403F3F" fontSize={12}>
                About Us
              </Text>
            </Center>
          </Pressable>

          <Pressable
            py="3"
            flex={1}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? "home" : "home-outline"}
                  />
                }
                color="#9A9494"
                size="lg"
              />
              <Text color="#9A9494" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>

          <Pressable
            py="2"
            flex={1}

            onPress={async() => {
              await signOut() ;
              navigation.navigate("LandingPage");
            }}
          >
            <Center>
              <Icon
                mb={1}
                as={<Entypo name="log-out" size={24} color="#9A9494" />}
                color="#9A9494"
                size="md"
              />
              <Text color="#9A9494" fontSize="12">
                Log Out
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}
