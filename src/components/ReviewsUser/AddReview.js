import React, { useState } from "react";
import { Box, Button, SlideFade, TextArea } from "native-base";
import { AirbnbRating } from "react-native-ratings";
import axios from "axios";

function AddReview() {
  const [input, setInput] = useState("");

  const Submit = () => {
    axios
      .post(`http://bycyclebackend.herokuapp.com/addReviewFirst`, {
        input,
      })
      .then(() => {
        console.log(`success`);
      });
  };

  return (
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
        w={{
          base: "100%",
          md: "25%",
        }}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={() => {
          alert(`this is your input:${input}`);
          setInput("");
        }}
        placeholder="Your review goes here"
        value={input}
      />
      <Button onPress={Submit}>Add Review</Button>
    </Box>
  );
}

export default AddReview;
