import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import axios from "axios";

function AboutBikes() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get(" http://192.168.11.162:3000/bicycle ").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };
  useEffect(async () => {
    getData();
  }, []);

  return (
    <View>
      <Text>hello data is not here yet</Text>
    </View>
  );
}

export default AboutBikes;
