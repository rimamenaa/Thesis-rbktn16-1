import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
} from "react-native";
import {
  Text,
  Box,
  Heading,
  AspectRatio,
  Image,
  Stack,
  Button
} from "native-base";
import tailwind from "tailwind-rn";
import Footer from "../Footer/Footer";

function Rules({navigation}) {
  return (
    <SafeAreaView style={tailwind("h-full ")}>
      <ScrollView style={tailwind("mb-16")}>
        <View style={tailwind(" items-center ")}>
      
<Box 
               style={tailwind("items-center mb-8")}
               rounded="lg"
              overflow="hidden"
              width="95%"
              shadow={1}
              _light={{ backgroundColor: "gray.50" }}
              _dark={{ backgroundColor: "gray.700" }}
            >
              <Box>
                <AspectRatio ratio={1.47} height={350}>
                  <Image
                    source={require("../../../assets/roadrule.png")}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1" color="yellow.500">
                  Ride With Traffic
                  </Heading>
                </Stack>
                <Text fontWeight="600">
                Bicyclists are required by law to ride in the same direction as
            motorists, except in signed and marked contraflow lanes. Be alert
            and look out for car doors opening – it's best to stay at least 3-4
            feet from the parked cars.
                </Text>
         
              </Stack>
            </Box>

<Box 
               style={tailwind("items-center mb-8")}
               rounded="lg"
              overflow="hidden"
              width="95%"
              shadow={1}
              _light={{ backgroundColor: "gray.50" }}
              _dark={{ backgroundColor: "gray.700" }}
            >
              <Box>
                  <Image
                    source={require("../../../assets/roadrule2.png")}
                    alt="image"
                    h="72"
                  />
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1" color="yellow.500">
                  Obey Traffic Signals
                  </Heading>
                </Stack>
                <Text fontWeight="600">
                Obey all traffic signals and signs, such as stopping at red lights
            and stop signs.
                </Text>
         
              </Stack>
            </Box> 
            


                  
<Box 
               style={tailwind("items-center mb-8")}
               rounded="lg"
              overflow="hidden"
              width="95%"
              shadow={1}
              _light={{ backgroundColor: "gray.50" }}
              _dark={{ backgroundColor: "gray.700" }}
            >
              <Box>
                  <Image
                    source={require("../../../assets/roadrule3.png")}
                    alt="image"
                    height="72"

                  />
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1" color="yellow.500">
                  Yield To Pedestrians
                  </Heading>
                </Stack>
                <Text fontWeight="600">
                Bicyclists must yield the right of way to pedestrians at crosswalks
            and intersections. Use your bell to alert pedestrians of your
            presence when necessary.
                </Text>
         
              </Stack>
            </Box>

          <Box
               style={tailwind("items-center mb-8")}
               rounded="lg"
              overflow="hidden"
              width="95%"
              shadow={1}
              _light={{ backgroundColor: "gray.50" }}
              _dark={{ backgroundColor: "gray.700" }}
            >
              <Box>
                  <Image
                    source={require("../../../assets/roadrule4.png")}
                    alt="image"
                    height="72"

                  />
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1" color="yellow.500">
                  Don't Ride Distracted
                  </Heading>
                </Stack>
                <Text fontWeight="600">
                Don’t text and ride! Pull over if you have to send a message or talk
            on the phone. It's also not a good idea to weave in and out of cars.
            Being aware and predictable reduces the chance of a crash.
                </Text>
         
              </Stack>
            </Box>
        </View>
      </ScrollView>
      <View style={{position: 'absolute', width: "100%", marginTop:655, backgroundColor:"white"}}>
        <Footer navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default Rules;
