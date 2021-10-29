import React from "react";
import {  Image,StyleSheet,View,Text,CheckBox, TextInput,Button } from "react-native";

import ggl from '../../../assets/ggl.png';
import tailwind from "tailwind-rn";
function SignIn() {
  return (
    <View style={tailwind("flex md:flex-row items-center ")}>
  <View>
      <Text  style={tailwind('pt-12 pr-60 font-bold text-black text-base')}>Sign In </Text>
  </View>
  <View style={tailwind('bg-white mt-8 items-center w-80')}>
  <Text  style={tailwind('pt-12 font-bold text-gray-300 text-xs')}>Or sign In with credentials </Text>
 <View style={tailwind("flex flex-row")}><Image source={ggl} style={{height:18,width:18,marginTop:30}}></Image><Text style={tailwind("mt-8 pl-2 font-bold")}>GOOGLE</Text></View>
 <View style={tailwind("bg-gray-100 h-96 mt-12")}>
 <TextInput
   style={tailwind("mt-6 h-10 w-80 mr-3 ml-3 bg-white")}
   type="email"
   placeholder="Email"
   className="mt-12"
 />
 <TextInput
   style={tailwind('mt-6 h-10 w-80 mr-3 ml-3 bg-white')}
   type="password"
   placeholder="password"
 />
 <View style={tailwind('flex flex-row')}>
 <CheckBox style={tailwind('mt-6 ml-2')}/>
 <Text style={tailwind('pl-2 pt-6')}>I Agree With The <Text style={tailwind('text-yellow-300')}>Privacy Policy</Text></Text>
 </View>
 <View style={{width:167, paddingTop:150, marginLeft:87}}>
<Button
   title="Sign Up"
   color="#191B11"
 />
 </View>
</View>
 </View>
     
     </View>
  )
}
export default SignIn;
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
    width: 375,
    height: 812,
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
  // height:812
  width: 385
}}
)