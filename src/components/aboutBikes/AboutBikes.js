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
  VStack
} from "native-base";


import Footer from "../Footer/Footer";
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";


function AboutBikes() {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(async () => {
    axios
      .get("https://bycyclebackend.herokuapp.com/bicycle")
      .then((response) => {
        console.log('dataaaa', response.data.slice(7,14));
        setData(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);


  return (

<View alignItems="center">

<Pressable
onPress={() => {
  navigation.navigate("AdultBikes");
}}
> 
                 <VStack space={2} alignItems="center" safeAreaTop my={6}>
            <Image
              size="2xl"
              resizeMode="cover"
              source={require("../../../assets/adult.jpg")}

              alt="Alternate Text"
            />
        </VStack>

</Pressable>

<Pressable
onPress={() => {
  navigation.navigate("KidBikes");
}}
> 
                      <VStack space={2} alignItems="center" safeAreaTop my={6}>
            <Image
              size="2xl"
              resizeMode="cover"
              source={require("../../../assets/kid.jpg")}

              alt="kid"
            />
        </VStack>
</Pressable>
</View>

  );
}

export default AboutBikes;
