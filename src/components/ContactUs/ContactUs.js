import React from "react";

import { View, Text, TextInput, Button } from "react-native";

import tailwind from "tailwind-rn";

function ContactUs() {
  return (
    <>
      <View
        style={tailwind("flex md:flex-row items-center h-full bg-gray-600 ")}
      >
        <View style={tailwind("  items-center w-80 ")}>
          <View style={tailwind("flex flex-row ")}>
            <Text style={tailwind("font-bold text-yellow")}>Contact Us</Text>
          </View>
          <View style={tailwind("flex flex-row ")}>
            <Text style={tailwind("font-bold text-white")}>
              Feel free to contact us
            </Text>
          </View>
          <View style={tailwind("flex flex-row")}>
            <Text style={tailwind("font-bold text-white")}>Mail icon</Text>
          </View>
          <View style={tailwind("flex flex-row")}>
            <Text style={tailwind("font-bold text-white")}>
              info@by-cycle.tn
            </Text>
          </View>

          <View style={tailwind("flex flex-row")}>
            <Text style={tailwind("font-bold text-white")}>Mail us</Text>
          </View>
          <View style={tailwind("flex flex-row")}>
            <Text style={tailwind("font-bold text-white")}>PHONE ICON</Text>
          </View>
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
              style={tailwind("h-10 w-80 ml-2 mt-14 bg-white")}
              type="text"
              placeholder="Enter your name"
              className="mt-12"
            />
            <TextInput
              style={tailwind("mt-6 h-10 w-80 ml-2 bg-white")}
              type="text"
              placeholder="Enter your email address"
            />
            <TextInput
              style={tailwind("mt-6 h-28 w-80 ml-2 bg-white")}
              numberOfLines={4}
              type="text"
              placeholder="Got a question? We're here to help!"
            />

            <View
              style={{
                width: 167,
                marginTop: 70,
                marginLeft: 87,
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
