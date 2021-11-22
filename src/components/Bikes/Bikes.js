import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  View,
  AspectRatio,
  Image,
  Stack,
  Text,
  Card,
  ScrollView,
  Button,
  Pressable,
  Box,
  HStack,
  Spacer,
  Flex,
  Center,
  NativeBaseProvider,
  VStack,
} from "native-base";
import tailwind from "tailwind-rn";
import { BlurView } from "expo-blur";
import Footer from "../Footer/Footer";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import tw from "tailwind-react-native-classnames";
function AboutBikes() {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(async () => {
    axios
      .get("https://bycyclethesis.herokuapp.com/bicycle")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <View style={tw `items-center bg-white h-full`}>
      <Pressable
        onPress={() => {
          navigation.navigate("AdultsBikes");
        }}
      >
        <VStack space={2} alignItems="center" safeAreaTop my={20}>
          <Image
            size="2xl"
            resizeMode="cover"
            borderRadius={5}
            source={require("../../../assets/adult.jpg")}
            alt="Adult"
          />
          <BlurView
            style={tw`w-full h-12 rounded items-center mt-7 absolute`}
            intensity={70}
            tint="dark"
            color="grey"
          >
            <Text
              color="amber.500"
              style={tailwind("text-2xl mt-2 font-bold absolute")}
            >
              ADULTS
            </Text>
          </BlurView>
        </VStack>
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate("KidsBikes");
        }}
      >
        <VStack space={2} alignItems="center">
          <Image
            size="2xl"
            resizeMode="cover"
            borderRadius={5}
            marginTop={12}
            source={require("../../../assets/kid.jpg")}
            alt="kid"
          />
          <BlurView
            style={tw`w-full h-12 rounded items-center mt-12 absolute`}
            intensity={70}
            tint="dark"
            color="grey"
          >
            <Text
              color="amber.500"
              style={tailwind("text-2xl mt-2 font-bold absolute")}
            >
              KIDS
            </Text>
          </BlurView>
        </VStack>
      </Pressable>
    </View>
  );
}

export default AboutBikes;
