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
  AspectRatio,
  TextArea,
  KeyboardAvoidingView,
  View,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Rating, AirbnbRating } from "react-native-ratings";
import tw from "tailwind-react-native-classnames";

const AddReview = () => {
  return (
    <KeyboardAvoidingView behavior="height">
      <ScrollView>
        <Box>
          <AirbnbRating
            count={5}
            reviews={[1, 2, 3, 4, 5]}
            defaultRating={5}
            size={20}
          />
          <TextArea
            fontSize="md"
            fontWeight="semibold"
            _dark={{
              color: "coolGray.50",
            }}
            _light={{
              color: "coolGray.800",
            }}
            h={{ base: "20" }}
            placeholder="Your review goes here"
            w={{
              base: "100%",
              md: "25%",
            }}
            onChangeText={(text) => setInput(text)}
            onSubmitEditing={() => {
              alert(`Your review is:${input}`);
            }}
          />
          <Button> Add Review</Button>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddReview;
