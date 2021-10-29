import React from "react";
import { Button, Image, TextInput, ImageBackground, StyleSheet, View, Text } from "react-native";
import bgImage from "../../../assets/18.png";
import ggl from "../../../assets/google.png";
import tailwind from "tailwind-rn";

function Signup() {

  return (
    <View style={tailwind("flex md:flex-row items-center max-h-screen")}>
     <ImageBackground >

       {/* <Text style={tailwind('mt-12 ml-12 font-bold text-white text-base')}>Create An Account</Text>
       <View style={{flex:1}}>
           <View style={styles.cardWhite}>
             <Text style={tw`flex justify-center mt-8 text-gray-400`}>Sign up with</Text>

             <View style={tailwind("flex flex-row")}><Image source={ggl} style={{height:18,width:18,marginTop:30}}></Image><Text style={tailwind("mt-8 pl-2 font-bold")}>GOOGLE</Text></View>
         
           <View style={styles.cardGrey}>
           <Text style={tw`flex justify-center mt-8 text-gray-400`}>Or sign up with credentials</Text>

           <TextInput style={styles.input} type="text" placeholder="Name" keyboardType="numeric" className="mt-12 ml-8"/>
           </View>


           </View>
           </View> */}
               
<View >
<Text style={tailwind('mt-12 ml-12 font-bold text-gray-600 text-base')}>Create An Account</Text>
</View> 
<View style={tailwind('bg-white mt-8 items-center w-80')}>

 <View style={tailwind("flex flex-row")}><Image source={ggl} style={{height:18,width:18,marginTop:30}}></Image><Text style={tailwind("mt-8 pl-2 font-bold")}>GOOGLE</Text></View>
 
 <View style={'greycard', tailwind("bg-gray-100 h-3/4 mt-8")}>
<TextInput
   style={tailwind("mt-16 h-10 w-80 mr-3 ml-3 bg-white")}
   type="text"
   placeholder="Name"
   keyboardType="numeric"
   className="mt-12"
 />
 <TextInput
   style={tailwind("mt-6 h-10 w-80 mr-3 ml-3 bg-white")}
   type="text"
   placeholder="Username"
   keyboardType="numeric"
   className="mt-12"
 />
 <TextInput
   style={tailwind("mt-6 h-10 w-80 mr-3 ml-3 bg-white")}
   type="text"
   placeholder="Email"
   keyboardType="numeric"
   className="mt-12"
 />
 <TextInput
   style={tailwind('mt-6 h-10 w-80 mr-3 ml-3 bg-white')}
   type="password"
   placeholder="password"
 />
 <View style={tailwind('flex flex-row')}>
 {/* <CheckBox
  style={tailwind('mt-6 ml-6 w-5 h-5')}
   value={isSelected}
   onValueChange={setSelection}  
 /> */}
 <Text style={tailwind('pl-2 pt-6')}>I Agree With The <Text style={tailwind('text-yellow-300')}>Privacy Policy</Text></Text>
 </View>
  
 <View style={{width:167, marginTop:70, marginBottom:50, marginLeft:87}}>
<Button 
   title="Sign Up"
   color="#191b11" 
 />
 </View>
</View>

 </View>

     </ImageBackground>
     </View>


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
  // height:812
  width: 385
}}
)