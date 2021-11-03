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
import com from "../../../assets/com.png";
import bike from "../../../assets/bike.png";
import rule1 from "../../../assets/rule1.png";
import rule2 from "../../../assets/rule2.png";
import rule3 from "../../../assets/rule3.png";
import rule4 from "../../../assets/rule4.png";
import { marginTop } from "styled-system";
import axios from "axios";

function Commercial() {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get(" http://localhost:3000/whybycycle").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };
  useEffect(async () => {
    getData();
  }, []);

  return (
    <SafeAreaView style={tailwind("h-full")}>
      <ScrollView>
        <View style={tailwind(" items-center ")}>
          <Image
            source={bike}
            style={{
              width: 420,
              height: 260,
            }}
          />

          <Text style={tailwind(" text-2xl  items-center font-bold py-8 p-3 ")}>
            Welcome to BY-CYCLE, a new bike share system in Tunisia with over
            400+ bikes and more than 18+ stations across the country...
          </Text>
          <Box
            style={tailwind("w-full items-center")}
            rounded="lg"
            overflow="hidden"
            width="72"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Box>
              <AspectRatio ratio={1.47} height={200}>
                <Image
                  source={require("../../../assets/rule1.png")}
                  alt="image"
                />
              </AspectRatio>
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
            style={tailwind("w-full mt-4 items-center")}
            rounded="lg"
            overflow="hidden"
            width="72"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Box>
              <AspectRatio ratio={1.47} height={200}>
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
            style={tailwind("w-full mt-4 items-center")}
            rounded="lg"
            overflow="hidden"
            width="72"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Box>
              <AspectRatio ratio={1.47} height={200}>
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
            style={tailwind("w-full mt-4 items-center")}
            rounded="lg"
            overflow="hidden"
            width="72"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Box>
              <AspectRatio ratio={1.47} height={200}>
                <Image
                  source={require("../../../assets/rule4.png")}
                  alt="image"
                />
              </AspectRatio>
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
        <View style={tailwind("mt-6")}>
          <Text
            style={tailwind("text-4xl font-bold text-yellow-400 ml-6 mb-6")}
          >
            Why Join By-Cycle?
          </Text>
          <View>
            <ScrollView horizontal={true}>
              {data.map((e, key) => {
                return (
                  <View key={key}>
                    <Box
                      style={tailwind("ml-4")}
                      rounded="lg"
                      overflow="hidden"
                      width="72"
                      shadow={1}
                      _light={{ backgroundColor: "gray.50" }}
                      _dark={{ backgroundColor: "gray.700" }}
                    >
                      <Box>
                        <AspectRatio ratio={1.47} height={200}>
                          <Image source={{ uri: e.photo }} alt="image" />
                        </AspectRatio>
                      </Box>
                      <Stack p="4" space={3}>
                        <Stack space={2}>
                          <Heading size="md" ml="-1">
                            {e.title}
                          </Heading>
                        </Stack>
                        <Text fontWeight="400">{e.description}</Text>
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
                );
              })}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Commercial;
