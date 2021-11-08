import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Text, Box, Heading, AspectRatio, Image, Stack } from "native-base";
import tailwind from "tailwind-rn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";
import Footer from "../Footer/Footer";


function SuggestionRoads({navigation}) {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://bycyclebackend.herokuapp.com/suggestion")
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
      <ScrollView>


      <View style={tailwind("items-center")}>
      <View style={tailwind("flex flex-row gap-8")}>

        <Text style={tailwind("ml-8 font-bold text-xl")}>
          Stations
        </Text> 
        <Text style={tailwind("ml-8 font-bold text-xl")}>
          Availability
        </Text> 
        </View>

        <View  style={tailwind(" rounded-md flex flex-row ")}>

        <Text style={tailwind("ml-8 font-bold")} >
          <Entypo name="location-pin" size={24} color="red" /> La Marsa
        </Text>
      
        <Text style={tailwind("ml-8")} >
 13 bikes
        </Text>
              </View>
              <View  style={tailwind(" rounded-md flex flex-row ")}>

        <Text style={tailwind("ml-8 font-bold")} >
          <Entypo name="location-pin" size={24} color="red" /> Lac 3
        </Text>
      
        <Text style={tailwind("ml-8")} >
 26 bikes
        </Text>
        </View>
        <View  style={tailwind(" rounded-md flex flex-row ")}>

        <Text style={tailwind("ml-8 font-bold")} >
          <Entypo name="location-pin" size={24} color="red" /> Sidi Boussaid
        </Text>
      
        <Text style={tailwind("ml-8")} >
 18 bikes
        </Text>
        </View>

      </View>


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
            </Stack>
          </Box>

          {data.map((e, key) => {
            return (
              <View key={key}>
                <Box
                  style={tailwind("w-96 mb-8")}
                  rounded="lg"
                  overflow="hidden"
                  // width="80"
                  shadow={1}
                  _light={{ backgroundColor: "gray.50" }}
                  _dark={{ backgroundColor: "gray.700" }}
                >
                  <Box style={tailwind("items-center")}>
                    <AspectRatio ratio={0.79} height={200}>
                      <Image source={{ uri: e.photo }} alt="image" />
                    </AspectRatio>
                  </Box>

                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading size="md" ml="2">
                        <Entypo name="location-pin" size={24} color="black" />{" "}
                        {e.location}
                      </Heading>
                    </Stack>
                    <Text fontWeight="400" ml="2">
                      <FontAwesome5 name="clock" size={20} color="black" />{" "}
                      Duration: {e.duration}{" "}
                      <MaterialCommunityIcons
                        name="map-marker-distance"
                        size={20}
                        color="black"
                      />
                      Distance: {e.distance}
                    </Text>
                  </Stack>
                  <Text
                    style={tailwind("ml-6 mr-8 mb-8")}
                    color="gray.600"
                    fontWeight="400"
                  >
                    {e.description}{" "}
                  </Text>
                </Box>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={{position: 'absolute', width: "95%",marginLeft:10 , marginTop:650}}>
        <Footer navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default SuggestionRoads;
