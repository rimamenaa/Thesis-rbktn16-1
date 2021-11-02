import React from "react";
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

function Commercial() {
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
            400+ bikes and more than 18+ stations across the country.
          </Text>
          <Box
              style={tailwind("w-full")}
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
              style={tailwind("w-full mt-4")}
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
              style={tailwind("w-full mt-4")}
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
                Take as many short rides as you want wherever and whenever you want.
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
              style={tailwind("w-full mt-4")}
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

        <View  style={tailwind("mt-6")}>
          <Text
            style={tailwind("text-4xl font-bold text-yellow-500 ml-6 mb-6")}
          >
            
            Why Join By-Cycle?
          </Text>
          <ScrollView horizontal={true}>
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
                  <Image
                    source={require("../../../assets/saveTime.jpg")}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    SAVE TIME
                  </Heading>
                </Stack>
                <Text fontWeight="400">
                  By-Cycle is often faster than other ways of getting around.
                  It's quick to grab a bike and convenient to drop it off at any
                  station when you're done.
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
                  <Image
                    source={require("../../../assets/saveMoney.jpg")}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    SAVE MONEY
                  </Heading>
                </Stack>
                <Text fontWeight="400">
                  Using By-Cycle can save you you a lot of money. Whith
                  unlimited 45 minutes trips included in your membership. It
                  pays for itself after few rides.
                </Text>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between"
                >
                  <HStack alignItems="center">
                    <Text color="gray.500" fontWeight="400">
                      42 mins ago
                    </Text>
                  </HStack>
                </HStack>
              </Stack>
            </Box>

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
                  <Image
                    source={require("../../../assets/haveFun.jpg")}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    HAVE FUN
                  </Heading>
                </Stack>
                <Text fontWeight="400">
                  Whether you're using By-Cycle to commute to work or ride to
                  meet friends. We bet you'll get there with a smile in your
                  face.
                </Text>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between"
                >
                  <HStack alignItems="center">
                    <Text color="gray.500" fontWeight="400">
                      50 mins ago
                    </Text>
                  </HStack>
                </HStack>
              </Stack>
            </Box>

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
                  <Image
                    source={require("../../../assets/goExercice.png")}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    GET EXERCICE
                  </Heading>
                </Stack>
                <Text fontWeight="400">
                  Getting places by pedal power is great exercice. Even biking
                  short distances can lead to positive health benefits, as
                  reduced stress.
                </Text>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between"
                >
                  <HStack alignItems="center">
                    <Text color="gray.500" fontWeight="400">
                      55 mins ago
                    </Text>
                  </HStack>
                </HStack>
              </Stack>
            </Box>

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
                  <Image
                    source={require("../../../assets/goGreen.jpg")}
                    alt="image"
                  />
                </AspectRatio>
                <Center
                  _text={{ color: "white", fontWeight: "700", fontSize: "xs" }}
                  position="absolute"
                  bottom={0}
                  px="3"
                  py="1.5"
                ></Center>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    GO GREEN
                  </Heading>
                </Stack>
                <Text fontWeight="400">
                  Riding a bike is great for the environment. Taking By-Cycle
                  instead of a car for short trips helps improve air quality and
                  reduce carbon emission.
                </Text>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between"
                >
                  <HStack alignItems="center">
                    <Text color="gray.500" fontWeight="400">
                      1 hour ago
                    </Text>
                  </HStack>
                </HStack>
              </Stack>
            </Box>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Commercial;
