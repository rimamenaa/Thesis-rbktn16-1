import React, { useEffect, useState } from "react";
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Text,
  Box,
  StatusBar,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Center,
  Stack,
  NativeBaseProvider,
} from "native-base";
import commercial from "../../../assets/commercial.png";
import tailwind from "tailwind-rn";
import Footer from "../Footer/Footer";
import axios from "axios";

function Commercial({navigation}) {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://bycyclethesis.herokuapp.com/whybycycle")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  };
  useEffect(async () => {
    getData();
  }, []);

  return (
    <SafeAreaView style={tailwind("h-full")}>
      <ScrollView style={tailwind("mb-20")}>
        <View style={tailwind(" items-center ")}>
          
          <Box
            style={tailwind("items-center")}
            rounded="lg"
            overflow="hidden"
            width="95%"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Box style={tailwind("items-center mt-4")}>
                <Image
                  height={180}
                  width={350}
                  source={require("../../../assets/card.png")}
                  alt="image"
                />
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1" color="yellow.500">
                  JOIN
                </Heading>
              </Stack>
              <Text fontWeight="800">
                Become a member and get your pass from any By-Cycle sation.
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <Text color="gray.500" fontWeight="400">
                    35 mins ago
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>

          <Box
            style={tailwind("mt-4 items-center")}
            rounded="lg"
            overflow="hidden"
            width="95%"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Box>
              <AspectRatio ratio={1.47} height={330}>
                <Image
                  source={require("../../../assets/rule2.png")}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1" color="yellow.500">
                  UNLOCK
                </Heading>
              </Stack>
              <Text fontWeight="800">
                Find an available bike nearby, and get a ride code or use your
                member key to unlock it.
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <Text color="gray.500" fontWeight="400">
                    35 mins ago
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>

          <Box
            style={tailwind("mt-4 items-center")}
            rounded="lg"
            overflow="hidden"
            width="95%"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Box>
              <AspectRatio ratio={1.47} height={400}>
                <Image
                  source={require("../../../assets/rule3.png")}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1" color="yellow.500">
                  RIDE
                </Heading>
              </Stack>
              <Text fontWeight="800">
                Take as many short rides as you want wherever and whenever you
                want.
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <Text color="gray.500" fontWeight="400">
                    35 mins ago
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>

          <Box
            style={tailwind("mt-4 items-center")}
            rounded="lg"
            overflow="hidden"
            width="95%"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Box>
              <Image
                source={require("../../../assets/rule4.png")}
                alt="image"
                height="72"
              />
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1" color="yellow.500">
                  RETURN
                </Heading>
              </Stack>
              <Text fontWeight="800">
                Return your bike to any station and make sure it's locked.
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <Text color="gray.500" fontWeight="400">
                    35 mins ago
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>
        </View>
      </ScrollView>
      <View style={{position: 'absolute', width: "100%", marginTop:785, backgroundColor:"white"}}>
        <Footer navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default Commercial;
