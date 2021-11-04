import React from "react";
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Image,
  useColorMode,
  ScrollView,
  Pressable,
  Divider,
  Button,
  Stack,
  Link,
  Card,
  TextArea,
  AspectRatio,
  View,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Rating, AirbnbRating } from "react-native-ratings";
import Circuit1 from "./circuit1";
import Circuit2 from "./circuit2";
import Circuit3 from "./circuit3";
import Circuit4 from "./circuit4";
import Circuit5 from "./circuit5";

const reviews = [
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBnIObRknPG622IYsgB9rxlS9195YssaXolQ&usqp=CAU",
    name: "Foulen ben felten",
    time: "12 May 2021",
    review:
      "I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBnIObRknPG622IYsgB9rxlS9195YssaXolQ&usqp=CAU",
    name: "LSameh derbali",
    time: "02 Jan 2021",
    review:
      "I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBnIObRknPG622IYsgB9rxlS9195YssaXolQ&usqp=CAU",
    name: "hehi ben houhen",
    time: "31 Aug 2021",
    review:
      "I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.",
  },
];

import tw from "tailwind-react-native-classnames";
export default function (props) {
  // const router = useRouter(); //use incase of Nextjs
  const [tabName, setTabName] = React.useState("Reviews");
  const { colorMode } = useColorMode();
  return (
    <View>
      <Circuit1></Circuit1>
      <Circuit2></Circuit2>
      <Circuit3></Circuit3>
      <Circuit4></Circuit4>
      <Circuit5></Circuit5>
    </View>
  );
}
