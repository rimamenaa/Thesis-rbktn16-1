// import React from "react";

// import { View, Text, TextInput, Button } from "react-native";

// import tailwind from "tailwind-rn";

// const ContactUs = () => {
//   return (
//     <>
//       <View
//         style={tailwind(
//           "flex md:flex-row content-center items-center h-full w-96 text-base bg-gray-600 font-sans md:font-serif "
//         )}
//       >
//         <View style={tailwind("  items-center w-80 ")}>
//           <View style={tailwind("flex flex-row ")}>
//             <Text style={tailwind("font-bold text-white")}>
//               Feel free to contact us
//             </Text>
//           </View>
//           <View style={tailwind("flex flex-row")}>
//             <Text style={tailwind("font-bold text-white")}>Mail icon</Text>
//           </View>
//           <View style={tailwind("flex flex-row")}>
//             <Text style={tailwind("font-bold text-white")}>
//               info@by-cycle.tn
//             </Text>
//           </View>

//           <View style={tailwind("flex flex-row")}>
//             <Text style={tailwind("font-bold text-white")}>Mail us</Text>
//           </View>
//           <View style={tailwind("flex flex-row")}>
//             <Text style={tailwind("font-bold text-white")}>PHONE ICON</Text>
//           </View>
//           <View style={tailwind("flex flex-row")}>
//             <Text style={tailwind("font-bold text-white")}>Call us</Text>
//           </View>
//           <View style={tailwind("flex flex-row mt-12")}>
//             <Text style={tailwind("font-bold text-white")}>
//               +216 11 222 333{" "}
//             </Text>
//           </View>
//           <View style={tailwind("mt-20 ")}>
//             <View style={("greycard", tailwind("bg-#2F3945 h-96 "))}>
//               <TextInput
//                 style={tailwind("h-10 w-80 ml-2 mt-14 bg-white")}
//                 type="text"
//                 placeholder="Enter your name"
//               />
//               <TextInput
//                 style={tailwind("mt-6 h-10 w-80 ml-2 bg-white")}
//                 type="text"
//                 placeholder="Enter your email address"
//               />
//               <TextInput
//                 style={tailwind("mt-6 h-28 w-80 ml-2 bg-white")}
//                 numberOfLines={4}
//                 type="text"
//                 placeholder="Got a question? We're here to help!"
//               />

//               <View
//                 style={{
//                   width: 167,
//                   marginTop: 70,
//                   marginLeft: 87,
//                   borderRadius: 4,
//                 }}
//               >
//                 <Button
//                   style={tailwind("mt-40")}
//                   title="Submit"
//                   color="#FBBC05"
//                 />
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     </>
//   );
// };
// export default ContactUs;

import React from "react";
import {
  Factory,
  Button,
  Stack,
  NativeBaseProvider,
  Center,
  ScrollView,
} from "native-base";
import { TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Icon, useBreakpointValue, Text, VStack, Heading } from "native-base";
import { FontAwesome, Foundation, Feather, mail } from "@expo/vector-icons";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export const ContactUs = () => {
  const flexDir = useBreakpointValue({
    base: "column",
    lg: "row",
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack py="8" space={8} alignItems="center" justifyContent="center">
        <Heading>Contact us</Heading>
        {/* <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="50"
            stroke="purple"
            strokeWidth=".5"
            fill="violet"
          />
        </Svg> */}
        <View style={{ flexDirection: flexDir }}>
          <VStack
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="amber.400"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
            <Icon
              as={<AntDesign name="phone" size={24} color="black" />}
              name="shield"
              size="sm"
              textAlign="center"
              _dark={{ color: "coolGray.800" }}
            />
            <Text
              fontSize="lg"
              textAlign="center"
              _dark={{ color: "coolGray.800" }}
            >
              By Phone
            </Text>
          </VStack>
          <VStack
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="amber.400"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
            <Icon
              as={<AntDesign name="mail" size={24} color="black" />}
              name="shield"
              size="sm"
              textAlign="center"
              _dark={{ color: "coolGray.800" }}
            />
            <Text
              fontSize="lg"
              textAlign="center"
              _dark={{ color: "coolGray.800" }}
            >
              By Mail
            </Text>
          </VStack>
          <VStack
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="amber.400"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
            <Icon
              as={<EvilIcons name="location" size={24} color="black" />}
              name="clock"
              size="sm"
              textAlign="center"
              _dark={{ color: "coolGray.800" }}
            />
            <Text
              fontSize="lg"
              textAlign="center"
              _dark={{ color: "coolGray.800" }}
            >
              Closest Station
            </Text>
          </VStack>
        </View>
      </VStack>
    </ScrollView>
  );
};

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ContactUs />
      </Center>
    </NativeBaseProvider>
  );
}
