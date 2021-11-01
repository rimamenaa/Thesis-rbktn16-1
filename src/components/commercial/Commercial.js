import React from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import commercial from "../../../assets/commercial.png";
import tailwind from "tailwind-rn";
import com from "../../../assets/com.png";
import bike from "../../../assets/bike.png";
import rule1 from "../../../assets/rule1.png";
import rule2 from "../../../assets/rule2.png";
import rule3 from "../../../assets/rule3.png";
import rule4 from "../../../assets/rule4.png";

function Commercial() {
  return (
    <SafeAreaView style={tailwind("h-full")}>
      <ScrollView>
        <View style={tailwind(" items-center ")}>
          <Image
            source={bike}
            style={{
              width: 420,
              height: 260,
            }}
          />

          <Text style={tailwind(" text-2xl  items-center font-bold py-8 p-3 ")}>
            Welcome to BY-CYCLE, a new bike share system in Tunisia with over
            400+ bikes and more than 18+ stations across the country.
          </Text>

          <Image
            source={rule1}
            style={{
              width: 240,
              height: 180,
            }}
          />
          <Text style={tailwind(" text-yellow-500 text-2xl font-bold")}>
            {" "}
            Join
          </Text>
          <Text style={tailwind(" text-gray-900 text-base  font-bold p-3")}>
            {" "}
            Become a member and get your pass from any By-Cycle sation
          </Text>
          <Image
            source={rule2}
            style={{
              width: 300,
              height: 170,
            }}
          />
          <Text style={tailwind(" text-yellow-500 text-2xl font-bold ")}>
            {" "}
            Unlock
          </Text>
          <Text style={tailwind(" text-gray-900 text-base  font-bold p-3")}>
            Find an available bike nearby, and get a ride code or use your
            member key to unlock it.
          </Text>

          <Image
            source={rule3}
            style={{
              width: 265,
              height: 240,
            }}
          />
          <Text style={tailwind(" text-yellow-500 text-2xl font-bold")}>
            {" "}
            Ride
          </Text>
          <Text style={tailwind(" text-gray-900 text-base  font-bold p-3")}>
            Take as many short rides as you want wherever and whenever you want.
          </Text>

          <Image
            source={rule4}
            style={{
              width: 280,
              height: 200,
            }}
          />
          <Text style={tailwind(" text-yellow-500 text-2xl font-bold")}>
            {" "}
            Return
          </Text>
          <Text style={tailwind(" text-gray-900 text-base  font-bold p-3")}>
            Return your bike to any station and make sure it's locked.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Commercial;
