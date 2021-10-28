import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import bgImage from "../../../assets/18.png";

function Signup() {

  return (
     <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
       <Text style={tw`mt-16 text-white ml-12 text-base font-bold`}>Create An Account</Text>
           <View style={styles.card}>
           
           </View>
     </ImageBackground>


  )
}
export default Signup;
 
const styles = StyleSheet.create({
  signin:{
    color: "#2F3945",

  },
  card:{
    backgroundColor: "white",
    width: 342,
    height: 610,
    left: 16,
    top:58,
    borderRadius:5
  },
image: {
  flex: 1,
  justifyContent: "center",
  height:812
}}
)