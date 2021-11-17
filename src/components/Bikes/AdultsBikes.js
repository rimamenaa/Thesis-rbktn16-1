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
} from "native-base";
import tailwind from "tailwind-rn";

import Footer from "../Footer/Footer";
import { FontAwesome } from "@expo/vector-icons";

function AboutBikes({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(async () => {
    axios
      .get("https://bycyclethesis.herokuapp.com/bicycle")
      .then((response) => {
        console.log("adults", response.data.slice(0, 9));
        setData(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <View>
      <ScrollView marginBottom="20">
        {data.slice(0, 9).map((bike, key) => {
          return (
            <Card key={key}>
              <AspectRatio ratio={9 / 9}>
                <Image
                  marginTop="1"
                  rounded="lg"
                  height="100%"
                  width="100%"
                  source={{ uri: bike.photo ? bike.photo:"null"}}
                  alt={"Loading..."}
                />
              </AspectRatio>
              <Stack>
                <Text fontSize="md" fontWeight="500" ml="-0.5" mt="-1" p="4">
                  {bike.description}
                </Text>
              </Stack>
              <Button
                colorScheme="yellow"
                my="2"
                width="100%"
                onPress={() => {
                  navigation.navigate("Rent");
                }}
              >
                <FontAwesome
                  name="arrow-circle-right"
                  size={35}
                  color="black"
                />
              </Button>
            </Card>
          );
        })}
      </ScrollView>

      <View
        style={{
          position: "absolute",
          width: "100%",
          marginTop: 740,
          backgroundColor: "white",
        }}
      >
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default AboutBikes;
