import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, Image, Card } from "react-native";

function AboutBikes() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    axios.get(" http://localhost:3000/bicycle ").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <View>
      {data.map((bike, key) => {
        console.log(bike);
        return (
          <View key={key}>
            <Image
              style={{ width: 400, height: 400 }}
              source={{ uri: bike.photo }}
            />
            <Text>{bike.description} </Text>
            <Text>{bike.category} </Text>
          </View>
        );
      })}
    </View>
  );
}

export default AboutBikes;
