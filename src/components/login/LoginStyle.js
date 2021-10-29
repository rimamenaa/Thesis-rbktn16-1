import React from "react";
import {  Image,StyleSheet,View,Text, TextInput,Button } from "react-native";

import ggl from '../../../assets/ggl.png';
import tailwind from "tailwind-rn";
// import { SocialIcon } from 'react-native-elements'
export default function Login() {
  return (
    <View style={tailwind("h-full bg-white w-full")} >
        <View style={tailwind(" pt-20")}>
         <Text style={tailwind("  text-white")}>logo here</Text>
         <Text  style={tailwind('pt-12 pl-12 font-bold text-white text-base')}>Sign In </Text>
         </View>
 <View style={tailwind("flex flex-row  pl-32")}><Image source={ggl} style={{height:18,width:18,marginTop:30}}></Image><Text style={tailwind("mt-8 pl-2 font-bold")}>GOOGLE</Text></View>

        <View style={tailwind("pl-12  w-4/5 pt-72")}>
          <TextInput
            style={tailwind(" mb-2 bg-red-600")}
            type="text"
            placeholder="username"
            keyboardType="numeric"
          />
          <TextInput
            style={tailwind(' bg-white')}
            type="password"
            placeholder="password"
          />
       </View>
       <View style={tailwind('flex flex-row')}>

        <Text style={tailwind('pl-2 pt-6')}>I Agree With The <Text style={tailwind('text-yellow-300')}>Privacy Policy</Text></Text>
        </View>
          
         
<Button 
   width = "10"
   title="Sign In"
   color="grey" 
 />

            </View>
        
  )
}; 