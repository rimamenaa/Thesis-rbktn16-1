import React, { useState } from "react";
import { Box, Button, SlideFade, TextArea } from "native-base";
import { AirbnbRating } from "react-native-ratings";
import axios from "axios";

function AddReview() {
  const [review, setInput] = useState("");

  const Submit = () => {
    axios
      .post(`http://localhost:3000/reviews`, {
        review,
      })
      .then(() => {
        console.log(`success`);
      })
      .catch((err) => {
        console.log(err, "error");
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
          alert(`this is your input:${review}`);
          setInput("");
        }}
        placeholder="Your review goes here"
        value={review}
      />
      <Button onPress={Submit}>Add Review</Button>
    </Box>
  );
}

export default AddReview;
