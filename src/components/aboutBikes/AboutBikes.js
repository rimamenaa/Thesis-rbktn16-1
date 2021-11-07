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
  Button
} from "native-base";

import Loading from "../Loading/Loading";
import tw from "tailwind-react-native-classnames";
import Footer from "../Footer/Footer";
import { FontAwesome } from '@expo/vector-icons'; 


function AboutBikes({navigation}) {
  const [data, setData] = useState([]);

  useEffect(async () => {
    axios
      .get("https://bycyclebackend.herokuapp.com/bicycle")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <View>
    <ScrollView>   
      {data.map((bike, key) => {
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
                alt={"Loading..."}
              />
            </AspectRatio>
            <Stack>
              <Text fontSize="md" fontWeight="500" ml="-0.5" mt="-1" p="4">
                {bike.description}
              </Text>
            </Stack>
            <Button
                size="lg"
                variant="outline"
                colorScheme="amber"
                width="100%"
                height="16"
                onPress={() => {
                  navigation.navigate("Rent");
                }}
              >
 <FontAwesome name="arrow-circle-right" size={35} color="black" /> 
             </Button>
          </Card>
        );
      })}
    </ScrollView>
       
    <View style={{position: 'absolute', width: "95%",marginLeft:10 , marginTop:650}}>
        <Footer navigation={navigation} />
      </View>
      </View>
  );
}

export default AboutBikes;
