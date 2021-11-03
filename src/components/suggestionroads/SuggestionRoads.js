import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import {
  HStack,
  Text,
  Box,
  Heading,
  AspectRatio,
  Image,
  Stack,
} from "native-base";
import tailwind from "tailwind-rn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function SuggestionRoads() {
  return (
    <SafeAreaView style={tailwind("h-full")}>
      <ScrollView>
        <View style={tailwind("items-center mt-8")}>
          <Box
            style={tailwind("mb-8 items-center")}
            rounded="lg"
            overflow="hidden"
            width="80"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Bored of riding the same old routes? Struggling for
                  inspiration on how to find new roads to ride? Let us help you!
                </Heading>
              </Stack>

              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              ></HStack>
            </Stack>
          </Box>
          <Box
            style={tailwind("w-full items-center mb-8")}
            rounded="lg"
            overflow="hidden"
            width="80"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Box>
              <AspectRatio ratio={0.79} height={200}>
                <Image
                  source={require("../../../assets/citehilly.png")}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  <Entypo name="location-pin" size={24} color="black" /> From
                  Cité Olympique to Cité El Ghazela
                </Heading>
              </Stack>
              <Text fontWeight="400">
                <FontAwesome5 name="clock" size={24} color="black" /> Duration:
                1:05h{" "}
                <MaterialCommunityIcons
                  name="map-marker-distance"
                  size={24}
                  color="black"
                />
                Distance: 9km
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <Text color="gray.500" fontWeight="400">
                    write some important stuff here ...
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>
          <Box
            style={tailwind("w-full items-center mb-8")}
            rounded="lg"
            overflow="hidden"
            width="80"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Box>
              <AspectRatio ratio={0.79} height={200}>
                <Image
                  source={require("../../../assets/sidibouhilly.png")}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  <Entypo name="location-pin" size={24} color="black" /> La
                  Marsa, Tunis
                </Heading>
              </Stack>
              <Text fontWeight="400">
                <FontAwesome5 name="clock" size={24} color="black" /> Duration:
                1:18h{" "}
                <MaterialCommunityIcons
                  name="map-marker-distance"
                  size={24}
                  color="black"
                />
                Distance: 11km
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <Text color="gray.500" fontWeight="400">
                    write some important stuff here ...
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>
          <Box
            style={tailwind("w-full items-center mb-8")}
            rounded="lg"
            overflow="hidden"
            width="80"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Box>
              <AspectRatio ratio={1.45} height={200}>
                <Image
                  source={require("../../../assets/gouletteflat.png")}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  <Entypo name="location-pin" size={24} color="black" /> La
                  Goulette, Tunis
                </Heading>
              </Stack>
              <Text fontWeight="400">
                <FontAwesome5 name="clock" size={24} color="black" /> Duration:
                1:38h{" "}
                <MaterialCommunityIcons
                  name="map-marker-distance"
                  size={24}
                  color="black"
                />
                Distance: 11km
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <Text color="gray.500" fontWeight="400">
                    write some important stuff here ...
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>
          <Box
            style={tailwind("w-full items-center mb-8")}
            rounded="lg"
            overflow="hidden"
            width="80"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Box>
              <AspectRatio ratio={1.45} height={200}>
                <Image
                  source={require("../../../assets/lac3flat.png")}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  <Entypo name="location-pin" size={24} color="black" /> Lac 3,
                  Tunis
                </Heading>
              </Stack>
              <Text fontWeight="400">
                <FontAwesome5 name="clock" size={24} color="black" /> Duration:
                1:04h{" "}
                <MaterialCommunityIcons
                  name="map-marker-distance"
                  size={24}
                  color="black"
                />
                Distance: 10.1km
              </Text>
            </Stack>
            <Text
              style={tailwind("ml-6 mr-6 mb-8")}
              color="gray.600"
              fontWeight="400"
            >
              Along the shores of the lake, there is a fantastically beautiful
              route, one spectacular sight chases the next.{" "}
            </Text>
          </Box>
          <Box
            style={tailwind("w-full items-center mb-8")}
            rounded="lg"
            overflow="hidden"
            width="80"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Box>
              <AspectRatio ratio={1.07} height={200}>
                <Image
                  source={require("../../../assets/marsaflatp.png")}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  <Entypo name="location-pin" size={24} color="black" /> La
                  Marsa, Tunis
                </Heading>
              </Stack>
              <Text fontWeight="400">
                <FontAwesome5 name="clock" size={24} color="black" /> Duration:
                2:56h{" "}
                <MaterialCommunityIcons
                  name="map-marker-distance"
                  size={24}
                  color="black"
                />
                Distance: 30km
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <Text color="gray.500" fontWeight="400">
                    write some important stuff here ...
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>
          <Box
            style={tailwind("w-full items-center mb-8")}
            rounded="lg"
            overflow="hidden"
            width="80"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Box>
              <AspectRatio ratio={1.45} height={200}>
                <Image
                  source={require("../../../assets/short1.png")}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  <Entypo name="location-pin" size={24} color="black" /> La
                  Marsa, Tunis
                </Heading>
              </Stack>
              <Text fontWeight="400">
                <FontAwesome5 name="clock" size={24} color="black" /> Duration:
                0:23h{" "}
                <MaterialCommunityIcons
                  name="map-marker-distance"
                  size={24}
                  color="black"
                />
                Distance: 6km
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              ></HStack>
            </Stack>
            <Text
              style={tailwind("ml-6 mr-8 mb-8")}
              color="gray.600"
              fontWeight="400"
            >
              Riding around your neighborhood, even just around the block, can
              provide what a lot of us need right now — a break.{" "}
            </Text>
          </Box>

          <Box
            style={tailwind("w-full items-center mb-8")}
            rounded="lg"
            overflow="hidden"
            width="80"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Box>
              <AspectRatio ratio={1.45} height={200}>
                <Image
                  source={require("../../../assets/short2.png")}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  <Entypo name="location-pin" size={24} color="black" />{" "}
                  Carthage, Tunis
                </Heading>
              </Stack>
              <Text fontWeight="400">
                <FontAwesome5 name="clock" size={24} color="black" /> Duration:
                0:44h{" "}
                <MaterialCommunityIcons
                  name="map-marker-distance"
                  size={24}
                  color="black"
                />
                Distance: 9.5km
              </Text>
            </Stack>
            <Text
              style={tailwind("ml-6 mr-8 mb-8")}
              color="gray.600"
              fontWeight="400"
            >
              Riding around your neighborhood keeps your body and mind healthy
              and active, you might be surprised at how much even a short ride
              can improve your day.{" "}
            </Text>
          </Box>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SuggestionRoads;
