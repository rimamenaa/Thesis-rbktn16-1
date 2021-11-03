import * as React from "react";
import { Rating } from "react-native-elements";

export default () => {
  return (
    <Rating
      style={{ alignItems: "flex-end" }}
      fractions={0}
      imageSize={70}
      minValue={0}
      onFinishRating={() => console.log("onFinishRating()")}
      onStartRating={() => console.log("onStartRating()")}
      ratingBackgroundColor="#FFF"
      ratingColor="#FF0"
      ratingCount={5}
      ratingImage="star"
      ratingTextColor="#222"
      reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
      showRating
      startingValue={0}
      style={{}}
      type="star"
    />
  );
};
