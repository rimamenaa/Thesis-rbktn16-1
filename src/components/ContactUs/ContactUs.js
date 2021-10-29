import React from "react";
import {
  ImageBackground,
  Image,
  View,
  Text,
  TextInput,
  UselessTextInput,
  Button,
} from "react-native";

import tailwind from "tailwind-rn";

function ContactUs() {
  return (
    <View style={tailwind("flex md:flex-row items-center max-h-screen ")}>
      <View style={tailwind("  items-center w-80")}>
        <View style={tailwind("flex flex-row")}>
          <Text style={tailwind("font-bold")}>Contact Us</Text>
        </View>

        <View style={("greycard", tailwind("bg-#2F3945 h-96 "))}>
          <TextInput
            style={tailwind("h-10 w-80 ml-2 ")}
            type="text"
            placeholder="Enter your name"
            keyboardType="numeric"
            className="mt-12"
          />
          <TextInput
            style={tailwind("mt-6 h-10 w-80 ml-2 ")}
            type="text"
            placeholder="Enter your email address"
          />
          <TextInput
            style={tailwind("mt-6 h-80 w-80 ml-2 ")}
            numberOfLines={4}
            type="text"
            placeholder="Got a question? We're here to help!"
          />
          <View style={tailwind("flex flex-row")}>
            <Text style={tailwind("pl-2 pt-6")}>
              I Agree With The{" "}
              <Text style={tailwind("text-yellow-300")}>Privacy Policy</Text>
            </Text>
          </View>

          <View style={{ width: 167, marginTop: 70, marginLeft: 87 }}>
            <Button title="Submit" color="#FBBC05" />
          </View>
        </View>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default ContactUs;
