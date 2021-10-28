import React from "react";
import {  ImageBackground,Image,StyleSheet,View, Text, TextInput,Button } from "react-native";
import chevronLeft from '../../../assets/chevronLeft.png';
import ggl from '../../../assets/ggl.png';

const image = { uri: "https://media.discordapp.net/attachments/902219842738856050/903297989571907585/1_8.png?width=308&height=669" };
function Login() {
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
     <View>
     <Text style={styles.signin}>Sign In</Text>
    <Image source={chevronLeft}></Image></View> 
    <View style={styles.card}>
    
      <View><Image source={ggl} style={styles.ggl}></Image><Text style={styles.gogl}>GOOGLE</Text></View>
      <View style={styles.cardgrey}></View>
    <TextInput
        style={styles.input}
        type="text"
        placeholder="email"
        keyboardType="numeric"
        className="mt-12"
      />
      <TextInput
        style={styles.input1}
        type="password"
        placeholder="password"
      />
      <Button
        style={styles.btn}
        title="Learn More"
      />
    </View>

    </ImageBackground>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 812
  },
  card:{
    backgroundColor:"white",
    position: "absolute",
    width: 342,
    height: 513,
    left: 0,
    top: 35,
    marginTop: 168,
    marginLeft: 18
  },
  text: {
    color: "white",
    marginTop: 20,
    fontSize: 42,
    lineHeight: 84,

    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#FFFFFF"
  },
  input: {
    position: "absolute",
    width: 308,
    height: 46,
    left: 17,
    top: 237,
  },
  input1: {
    position: "absolute",
    width: 308,
    height: 46,
    left: 17,
    top: 299,
  },
  ggl:{
    marginLeft:130,
    marginTop: 32,
    width: 20,
    height: 20,
  },
  gogl:{
    marginLeft:160,
    fontWeight: "bold"
  },
  cardgrey:{
    backgroundColor:"#F4F5F7",
    position: "absolute",
    width: 342,
    height: 400,
    left: 0,
    marginTop: 120, 
  },
  btn:{
    marginTop:400,
  }

});

export default Login
