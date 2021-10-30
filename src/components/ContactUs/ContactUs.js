import React from "react";

import { View, Text, TextInput,Image, Button } from "react-native";
import tailwind from "tailwind-rn";
import mail from "../../../assets/mail.png";
import ph from "../../../assets/ph.png";



function ContactUs() {
  return (
    <>
      <View
        style={tailwind("flex md:flex-row items-center h-full bg-gray-700 ")}
      >
        <View style={tailwind("items-center w-80")}>

          <View style={tailwind("flex flex-row mt-6")}>
            <Text style={tailwind("font-bold text-base text-white")}>
              Feel Free To Get In Touch With Us
            </Text>
          </View>
          
          
          <Image
            source={mail}
            style={tailwind("w-8 h-6 mt-12")}
          />
          <View style={tailwind("flex flex-row")}>
            <Text style={tailwind("font-bold text-white")}>Mail us</Text>
          </View>
          <View style={tailwind("flex flex-row")}>
            <Text style={tailwind("font-bold text-white")}>
              info@by-cycle.tn
            </Text>
          </View>
          
          <Image
            source={ph}
            style={tailwind("w-8 h-8 mt-8")}
          />
          <View style={tailwind("flex flex-row")}>
            <Text style={tailwind("font-bold text-white")}>Call us</Text>
          </View>
          <View style={tailwind("flex flex-row")}>
            <Text style={tailwind("font-bold text-white")}>
              +216 11 222 333{" "}
            </Text>
          </View>
          <View style={("greycard", tailwind("bg-#2F3945 h-96 "))}>
            <TextInput
              style={tailwind("h-10 w-40 ml-2 mt-14 bg-white rounded")}
              type="text"
              placeholder="Enter your name"
              className="mt-12"
            />
            <TextInput
              style={tailwind("mt-6 h-10 w-64 ml-2 bg-white rounded")}
              type="text"
              placeholder="Enter your email address"
            />
            <TextInput
              style={tailwind("mt-6 h-28 w-80 ml-2 bg-white rounded")}
              numberOfLines={4}
              type="text"
              placeholder="Got a question? We're here to help!"
            />

            <View
              style={{
                width: 167,
                marginTop: 70,
                marginLeft: 10,
                borderRadius: 4,
              }}
            >
              <Button style={tailwind("")} title="Submit" color="#FBBC05" />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
export default ContactUs;
