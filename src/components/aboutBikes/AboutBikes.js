import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  AspectRatio,
  Image,
  Stack,
  Text,
  Card,
  ScrollView,
} from "native-base";

import Loading from "../Loading/Loading";
function AboutBikes() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    axios
      .get(" http://192.168.11.178:3000/bicycle ")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <ScrollView>
      {data.slice(0, 3).map((bike, key) => {
        console.log(bike);
        return (
          <Card key={key}>
            <Text fontSize="2xl">{bike.category}</Text>
            <AspectRatio ratio={9 / 9}>
              <Image
                marginTop="1"
                rounded="lg"
                height="100%"
                width="100%"
                source={{ uri: bike.photo }}
                alt={<Loading></Loading>}
              />
            </AspectRatio>
            <Stack>
              <Text
                fontSize="md"
                _light={{ color: "black.500" }}
                _dark={{ color: "black.300" }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
                p="4"
              >
                {bike.description}
              </Text>
            </Stack>
          </Card>
        );
      })}
    </ScrollView>
  );
}

export default AboutBikes;
