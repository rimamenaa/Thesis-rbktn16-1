import React, { useState } from "react";
import {
  HStack,
  VStack,
  Center,
  Hidden,
  StatusBar,
  Stack,
  Box,
  Image,
  View,
 
} from "native-base";
import tw from "tailwind-react-native-classnames";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Footer from "../Footer/Footer";
import Home from "./HomeStyle";

function HomePage({ navigation }) {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{
        flex: 1,
      }}
    >
      
      <VStack
        flex="1"
        px="6"
        py="9"
        _light={{
          bg: "white",
        }}
        _dark={{
          bg: "coolGray.800",
        }}
        space="3"
        justifyContent="space-between"
        borderTopRightRadius={{
          base: "2xl",
          md: "xl",
        }}
        borderBottomRightRadius={{
          base: "0",
          md: "xl",
        }}
        borderTopLeftRadius={{
          base: "2xl",
          md: "0",
        }}
      >
       
        <VStack space="7">
        <Home navigation={navigation}/>
        </VStack>
        <HStack
          mb="4"
          space="1"
          safeAreaBottom
          alignItems="center"
          justifyContent="center"
          mt={{
            base: "auto",
            md: "8",
          }}
        >
        </HStack>
        
        <View style={{position: 'absolute', width: "95%",marginLeft:30, marginTop:590, backgroundColor:"white"}}>
        <Footer navigation={navigation} />
      </View>
      </VStack>
    </KeyboardAwareScrollView>
  );
}
export default function SignIn({navigation}) {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        _light={{
          bg: "primary.900",
        }}
        _dark={{
          bg: "coolGray.900",
        }}
      />
      <Center my="auto" flex="1">
        <Stack
          _light={{
            bg: "primary.200",
          }}
          _dark={{
            bg: "primary.200",
          }}
          flexDirection={{
            base: "column",
            md: "row",
          }}
          w="100%"
          maxW={{
            md: "1016px",
          }}
          flex={{
            base: "1",
            md: "none",
          }}
        >
          <Hidden from="md">
            <VStack px="4" mt="4" mb="5" space="9">
              <VStack space="2">
               
              <View style={tw`items-center`}>
        <Image
          style={tw`w-20 h-20 mt-2`}
          source={require("../../../assets/LogoBike.png")}
        />
        </View>
        
              </VStack>
            </VStack>
          </Hidden>
          
          <HomePage navigation={navigation} />
         
        </Stack>
        
      </Center>
    </>
  );
}
