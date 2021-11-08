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
import tailwind from "tailwind-rn";


import Footer from "../Footer/Footer";
import { FontAwesome } from '@expo/vector-icons'; 


function AboutBikes({navigation}) {
  const [data, setData] = useState([]);

  useEffect(async () => {
    axios
      .get("https://bycyclebackend.herokuapp.com/bicycle")
      .then((response) => {
        console.log('kids', response.data.slice(10,17));
        setData(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);


  return (
    <View>
    <ScrollView marginBottom="20">   
    <Text style={tailwind("text-2xl text-yellow-600 font-bold")}>Bicycles For Kids</Text>

      {data.slice(10,17).map((bike, key) => {
        console.log(bike);
        return (
          <Card key={key}>
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
       
    <View style={{position: 'absolute', width: "100%", marginTop:655, backgroundColor:"white"}}>
        <Footer navigation={navigation} />
      </View>
      </View>
  );
}

export default AboutBikes;
