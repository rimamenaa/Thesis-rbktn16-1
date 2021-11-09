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
import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { logOutAsync } from "expo-google-app-auth";

export default function Footer({ navigation }) {
  const [selected] = React.useState(1);
  const logout = async () => {
    await AsyncStorage.removeItem("token");
    navigation.navigate("Login");
  };
  return (
    <NativeBaseProvider>
      <Box flex={1} safeAreaTop style={tw`w-full`}>
        <Center flex={1}></Center>
        <HStack alignItems="center" safeAreaBottom>
          <Pressable
            opacity={selected === 2 ? 1 : 0.6}
            color="#000000"
            py="2"
            flex={1}
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Center>
              <Icon
                mb={1}
                as={
                  <Ionicons
                    name="ios-person-circle-outline"
                    size={24}
                    color="#000000"
                  />
                }
                color="#000000"
                size="lg"
              />
              <Text color="#000000" fontSize={12}>
                Profile
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
                color="#000000"
                size="lg"
              />
              <Text color="#000000" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>

          <Pressable
            py="2"
            flex={1}
            onPress={() => {
              logOut();
            }}
          >
            <Center>
              <Icon
                mb={1}
                as={<Entypo name="log-out" size={24} color="black" />}
                color="#000000"
                size="md"
              />
              <Text color="#000000" fontSize="12">
                Log Out
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}
