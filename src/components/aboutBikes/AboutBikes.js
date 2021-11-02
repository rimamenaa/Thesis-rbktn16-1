import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  AspectRatio,
  Image,
  Center,
  Stack,
  Text,
  View,
  Card,
  ScrollView,
} from "native-base";

function AboutBikes() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    axios.get(" http://localhost:3000/bicycle ").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <Box>
      {data.map((bike, key) => {
        console.log(bike);
        return (
          <ScrollView>
            <Card>
              <Text fontSize="2xl" marginBottom="3">
                {bike.category}
              </Text>
              <AspectRatio ratio={16 / 9}>
                <Image
                  marginTop="5"
                  rounded="lg"
                  height="100%"
                  width="100%"
                  source={{ uri: bike.photo }}
                  alt={"Loading..."}
                />
              </AspectRatio>
              <Stack p="4" space={4}>
                <Text fontWeight="500" fontWeight="400" marginTop="8">
                  {bike.description}
                </Text>
              </Stack>
            </Card>
          </ScrollView>
        );
      })}
    </Box>
  );
}

export default AboutBikes;
