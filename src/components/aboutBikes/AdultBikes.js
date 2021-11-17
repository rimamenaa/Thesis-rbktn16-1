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
} from "native-base";

import Footer from "../Footer/Footer";

function AboutBikes({ navigation }) {
  // set the data into an array
  const [data, setData] = useState([]);
  //useEffect hooks to get the data from the link of deployment where data is stored
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
    <View>
      <ScrollView marginBottom="20">
        {/* slice the array where data stored to show just 9 bikes */}
        {data.slice(0, 9).map((bike, key) => {
          return (
            <Card key={key}>
              <AspectRatio ratio={9 / 9}>
                <Image
                  marginTop="1"
                  rounded="lg"
                  height="100%"
                  width="100%"
                  source={{ uri: bike.photo ? bike.photo : "null" }}
                  alt="image"
                />
              </AspectRatio>
              <Stack>
                <Text fontSize="md" fontWeight="500" ml="-0.5" mt="-1" p="4">
                  {bike.description}
                </Text>
              </Stack>
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
