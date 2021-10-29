import React from "react";
import { Image, TextInput, ImageBackground, StyleSheet, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import bgImage from "../../../assets/18.png";
import ggl from "../../../assets/google.png";

function Signup() {

  return (
     <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
       <Text style={tw`mt-16 text-white ml-12 text-base font-bold`}>Create An Account</Text>
       <View style={{flex:1}}>
           <View style={styles.cardWhite}>
             <Text style={tw`flex justify-center mt-8 text-gray-400`}>Sign up with</Text>

             <View  style={tw``}> 
             <Image source={ggl} style={styles.ggl}></Image>
               <Text style={tw`flex justify-center text-gray-700 font-bold`}>GOOGLE</Text>
             </View>
         
           <View style={styles.cardGrey}>
           <Text style={tw`flex justify-center mt-8 text-gray-400`}>Or sign up with credentials</Text>

           <TextInput style={styles.input} type="text" placeholder="Name" keyboardType="numeric" className="mt-12 ml-8"/>
           </View>


           </View>
           </View>
     </ImageBackground>


  )
}
export default Signup;
 
const styles = StyleSheet.create({
  ggl:{
    width: 14,
    height: 14,
    marginLeft: 135,
    // marginTop: 10
  },
  input: {
    position: "absolute",
    width: 308,
    height: 46,
    left: 17,
    top: 90,
    borderRadius: 5,
    backgroundColor: "white",
  },
  cardWhite:{
    backgroundColor: "white",
    width: 342,
    height: 610,
    left: 16,
    top:58,
    borderRadius:5
  },
  cardGrey:{
    backgroundColor: "#F4F5F7",
    width: 342,
    height: 500,
    
    top:46,
    borderRadius:5
  },
image: {
  flex: 1,
  justifyContent: "center",
  height:812
}}
)