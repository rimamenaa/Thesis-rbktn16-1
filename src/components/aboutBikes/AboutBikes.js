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
import tw from "tailwind-react-native-classnames";

function AboutBikes() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get(" http://localhost:3000/bicycle ").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };
  useEffect(async () => {
    getData();
  }, []);

 
  return (
    
    <View>
     {data.map((e,key)=>{
       return(
         <View key={key}>
           <Image source={{uri:e.photo}} style={tw `w-44 h-44`}/>
           <Text>{e.category}</Text>
           <Text>{e.description}</Text>
         </View>
       )
     })}
    </View>
  );
}

export default AboutBikes;
