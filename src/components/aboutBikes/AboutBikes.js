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
import tw from "tailwind-react-native-classnames";
import { BlurView } from "expo-blur";

import Footer from "../Footer/Footer";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { marginTop } from "styled-system";

function AboutBikes() {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(async () => {
    axios
      .get("https://bycyclethesis.herokuapp.com/bicycle")
      .then((response) => {
        console.log("dataaaa", response.data.slice(7, 14));
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
          navigation.navigate("AdultBikes");
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
        <Text color="amber.500" style={tw `text-2xl font-bold`} >
          ADULTS
        </Text>
        </BlurView>
        </VStack>
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate("KidBikes");
        }}
      >
        <VStack space={2} alignItems="center">
          <Image
            size="2xl"
            resizeMode="cover"
            borderRadius={5}
            marginTop={12}
            source={require("../../../assets/kid.jpg")}
            alt="image"
          />
           <BlurView
          style={tw`w-full h-12 rounded items-center mt-12 absolute`}
          intensity={70}
          tint="dark"
          color="grey"
        >
          <Text color="amber.500" style={tw `text-2xl mt-2 font-bold absolute`} >
          KIDS
        </Text>
        </BlurView>
        </VStack>
      </Pressable>
    </View>
  );
}

export default AboutBikes;
