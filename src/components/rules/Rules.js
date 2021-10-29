import React from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tailwind from "tailwind-rn";
import roadrule from "../../../assets/roadrule.png";
import roadrule2 from "../../../assets/roadrule2.png";
import roadrule3 from "../../../assets/roadrule3.png";
import roadrule4 from "../../../assets/roadrule4.png";

function Rules() {
  return (
    <SafeAreaView style={tailwind("h-full flex-col")}>
      <View style={tailwind(" items-center ")}>
        <Image
          source={roadrule}
          style={{
            width: 220,
            height: 300,
          }}
        />

        <Text style={tailwind(" text-1xl  items-center font-semibold py-8 ")}>
          Don’t text and ride! Pull over if you have to send a message or talk
          on the phone. It's also not a good idea to weave in and out of cars.
          Being aware and predictable reduces the chance of a crash.
        </Text>

        <Image
          source={roadrule2}
          style={{
            width: 220,
            height: 300,
          }}
        />
        <Text style={tailwind(" text-1xl  items-center font-semibold py-8 ")}>
          Bicyclists must yield the right of way to pedestrians at crosswalks
          and intersections. Use your bell to alert pedestrians of your presence
          when necessary.
        </Text>

        <Image
          source={roadrule3}
          style={{
            width: 280,
            height: 300,
          }}
        />
        <Text style={tailwind(" text-1xl  items-center font-semibold py-8 ")}>
          Obey all traffic signals and signs, such as stopping at red lights and
          stop signs.
        </Text>

        <Image
          source={roadrule4}
          style={{
            width: 280,
            height: 300,
          }}
        />
        <Text style={tailwind(" text-1xl  items-center font-semibold py-8 ")}>
          Bicyclists are required by law to ride in the same direction as
          motorists, except in signed and marked contraflow lanes. Be alert and
          look out for car doors opening – it's best to stay at least 3-4 feet
          from the parked cars.
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default Rules;
