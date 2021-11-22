import React, { useState, useEffect } from "react";
import {
  Box,
  HStack,
  Text,
  VStack,
  Image,
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
import { AirbnbRating } from "react-native-ratings";
import axios from "axios";
import moment from "moment";

export default function Circuit1() {
  const [tabName, setTabName] = useState("Reviews");
  const [review, setInput] = useState("");
  const [Data, setData] = useState([]);
  const rating = Math.ceil(Math.random(1 / 2) * 5);

  const averageArray = [];
  var total = 0;
  var average;

  if (Data) {
    for (var i = 0; i < Data.length; i++) {
      averageArray.push(Data[i].rating);
      total += averageArray[i];
      average = Math.ceil(total / averageArray.length);
    }
  }
  const Submit = () => {
    axios
      .post(`https://bycyclethesis.herokuapp.com/reviews`, {
        review,
        rating,
      })
      .then(() => {
        setInput("");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  const getReview = () => {
    axios
      .get(`https://bycyclethesis.herokuapp.com/reviews`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <>
      <Box
        safeAreaTop
        _light={{
          bg: "primary.200",
        }}
      />

      <VStack
        flex={1}
        _light={{
          bg: "primary.50",
        }}
      >
        <ScrollView>
          <Box
            flex={1}
            flexDirection={{
              base: "column",
              md: "row",
            }}
            _light={{
              borderTopColor: "coolGray.200",
            }}
          >
            <ScrollView
              flex={1}
              p={{
                md: 8,
              }}
              contentContainerStyle={{
                alignItems: "center",
                flex: 1,
              }}
            >
              <VStack maxW="1016px" flex={1} width="100%" alignItems="center">
                <Stack
                  flex={1}
                  p={{
                    md: "8",
                  }}
                  _light={{
                    bg: "white",
                  }}
                  borderWidth={1}
                  borderColor="#E5E7EB"
                  borderRadius={8}
                  direction={{
                    base: "column",
                    md: "row",
                  }}
                  space="6"
                >
                  {/* to be replaced by my styled box  */}
                  <ScrollView horizontal={true} marginBottom="3">
                  <Card width={380} marginBottom={3}>
                    <Text fontSize="2xl">
                      Lac 3
                    </Text>
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        marginTop="1"
                        rounded="lg"
                        height="100%"
                        width="100%"
                        source={require("../../../assets/lac01.png")}
                        alt={"Loading..."}
                      />
                    </AspectRatio>
                    <Stack p="4" space={4}>
                      <Box>
                        <Text
                          mt="3"
                          fontSize="sm"
                          lineHeight="lg"
                          fontWeight="medium"
                          letterSpacing="0.3"
                          _light={{
                            color: "coolGray.800",
                          }}
                        >
                          Lac 3 is a natural lagoon located between the Tunisian capital city of Tunis and the Gulf of Tunis (Mediterranean Sea). 
                          Recently, the Tunisian government and Sama Dubai of the UAE (led by Dubai Governor Mohammed bin Rashid Al Maktoum) have 
                          joint-ventured an investment agreement to develop the southern shore of the lake into a new commercial, residential and 
                          touristic center in Tunisia and the Mediterranean. 
                        </Text>
                      </Box>
                    </Stack>
                  </Card>

                  <Card width={380} marginBottom={3}>
                    <Text fontSize="2xl">
                      Sidi Bousaïd
                    </Text>
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        marginTop="1"
                        rounded="lg"
                        height="100%"
                        width="100%"
                        source={require("../../../assets/sidibou.png")}
                        alt={"Loading..."}
                      />
                    </AspectRatio>
                    <Stack p="4" space={4}>
                      <Box>
                        <Text
                          mt="3"
                          fontSize="sm"
                          lineHeight="lg"
                          fontWeight="medium"
                          letterSpacing="0.3"
                          _light={{
                            color: "coolGray.800",
                          }}
                        >
                          Sidi Bou Said is a town in northern Tunisia located about 20
                          km from the capital, Tunis. Cafe de delice and coast
                          view Named for a religious figure who lived there, Abu
                          Said al-Baji, it was previously called Jabal el-Menar.
                          The town itself is a tourist attraction and is known
                          for its extensive use of blue and white. It can be
                          reached by a TGM train, which runs from Tunis to La
                          Marsa.
                        </Text>
                      </Box>
                    </Stack>
                  </Card>

                  <Card width={380} marginBottom={3}>
                    <Text fontSize="2xl">
                      Tunis
                    </Text>
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        marginTop="1"
                        rounded="lg"
                        height="100%"
                        width="100%"
                        source={require("../../../assets/tunis.png")}
                        alt={"Loading..."}
                      />
                    </AspectRatio>
                    <Stack p="4" space={4}>
                      <Box>
                        <Text
                          mt="3"
                          fontSize="sm"
                          lineHeight="lg"
                          fontWeight="medium"
                          letterSpacing="0.3"
                          _light={{
                            color: "coolGray.800",
                          }}
                        >
                          Tunis is the capital and largest city of Tunisia. The greater metropolitan area of Tunis, 
                          often referred to as "Grand Tunis", has about 2,700,000 inhabitants. As of 2020, it is the 
                          fourth-largest city in the Maghreb region (after Casablanca, Algiers and Tripoli) and the 
                          sixteenth-largest in the Arab world.
                        </Text>
                      </Box>
                    </Stack>
                  </Card>
                  
                  <Card width={380} marginBottom={3}>
                    <Text fontSize="2xl">
                      Lac of tunis
                    </Text>
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        marginTop="1"
                        rounded="lg"
                        height="100%"
                        width="100%"
                        source={require("../../../assets/lac.png")}
                        alt={"Loading..."}
                      />
                    </AspectRatio>
                    <Stack p="4" space={4}>
                      <Box>
                        <Text
                          mt="3"
                          fontSize="sm"
                          lineHeight="lg"
                          fontWeight="medium"
                          letterSpacing="0.3"
                          _light={{
                            color: "coolGray.800",
                          }}
                        >
                          The Lake of Tunis is a natural lagoon located between the Tunisian capital city of Tunis and 
                          the Gulf of Tunis (Mediterranean Sea). The lake covers a total of 37 square kilometres, 
                          in contrast to its size its depth is very shallow. It was once the natural harbour of Tunis.
                        </Text>
                      </Box>
                    </Stack>
                  </Card>

                  </ScrollView>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <Box>
                      <VStack padding="8" flex={2} space={4}>
                        <HStack
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Text
                            fontSize="lg"
                            _light={{
                              color: "coolGray.800",
                            }}
                          >
                            Ratings
                          </Text>
                          <HStack alignItems="center" space="1">
                            <AirbnbRating
                              showRating={false}
                              isDisabled={true}
                              size={10}
                              defaultRating={average}
                            />
                            <Text
                              fontSize="md"
                              _light={{
                                color: "coolGray.800",
                              }}
                            >
                              {average}
                            </Text>
                            {/* <Text
                              fontSize="sm"
                              fontWeight="medium"
                              _light={{
                                color: "coolGray.400",
                              }}
                            >
                              (120)
                            </Text> */}
                          </HStack>
                        </HStack>

                        <Text
                          fontSize="xs"
                          fontWeight="medium"
                          _light={{
                            color: "coolGray.800",
                          }}
                        >
                          {Data.length}
                        </Text>
                      </VStack>

                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                      ></ScrollView>
                      {/* <AddToCartButton base="none" md="flex" /> */}

                      {/* THIS IS THE TAB I WANT TO MAKE LIKE */}
                      <HStack padding="8" flex={2} mt="1" space="4">
                        <Pressable
                          onPress={() => {
                            setTabName("AddReview");
                          }}
                        >
                          <Text
                            fontSize="16"
                            fontWeight="medium"
                            letterSpacing="0.4"
                            _light={{
                              color:
                                tabName == "AddReview"
                                  ? "primary.900"
                                  : "coolGray.400",
                            }}
                          >
                            AddReview
                          </Text>
                          {tabName == "AddReview" ? (
                            <Box width="100%" py="1">
                              <Divider bg="primary.100" />
                            </Box>
                          ) : (
                            <></>
                          )}
                        </Pressable>
                        <Pressable
                          onPress={() => {
                            setTabName("Reviews");
                          }}
                        >
                          <Text
                            fontSize="16"
                            fontWeight="medium"
                            letterSpacing="0.4"
                            _light={{
                              color:
                                tabName == "Reviews"
                                  ? "primary.900"
                                  : "coolGray.400",
                            }}
                          >
                            Reviews
                          </Text>
                          {tabName == "Reviews" ? (
                            <Box width="100%" py="1">
                              <Divider bg="primary.900" />
                            </Box>
                          ) : (
                            <></>
                          )}
                        </Pressable>
                      </HStack>

                      {/* IT ENDS HERE */}

                      {/* HERE IS THE CONDITIONAL RENDERING */}

                      {tabName === "AddReview" ? (
                        <Box>
                          <AirbnbRating
                            count={5}
                            reviews={[1, 2, 3, 4, 5]}
                            defaultRating={5}
                            size={20}
                            showRating={false}
                          />
                          <TextArea
                            fontSize="md"
                            fontWeight="semibold"
                            _light={{
                              color: "coolGray.800",
                            }}
                            h={{ base: "20" }}
                            w={{
                              base: "100%",
                              md: "25%",
                            }}
                            onChangeText={(text) => {
                              setInput(text);
                            }}
                            placeholder="Your review goes here"
                            value={review}
                          />
                          <Button
                            onPress={() => {
                              Submit(), getReview();
                            }}
                          >
                            Add Review
                          </Button>
                        </Box>
                      ) : (
                        Data.sort(function (a, b) {
                          return new Date(b.createdAt) - new Date(a.createdAt);
                        }).map((review, idx) => {
                          return (
                            <VStack my="1" px="4" key={idx}>
                              <Pressable
                                rounded="lg"
                                overflow="hidden"
                                width="80"
                                shadow={5}
                                _light={{ backgroundColor: "gray.100" }}
                                style={{ margin: 15 }}
                              >
                                <Stack p="4" space={3}>
                                  <Stack space={2}>
                                    <VStack space="1">
                                      <View
                                        flexDirection="row"
                                        flex={1}
                                        justifyContent="space-between"
                                      >
                                        {/* <Avatar
                                          source={require("../../../assets/goGreen.jpg")}
                                          height="9"
                                          width="9"
                                        /> */}
                                        <Text
                                          fontSize="lg"
                                          _light={{
                                            color: "coolGray.800",
                                          }}
                                        >
                                          username
                                        </Text>
                                        <HStack space="1">
                                          <AirbnbRating
                                            showRating={false}
                                            isDisabled={true}
                                            count={5}
                                            reviews={[1, 2, 3, 4, 5]}
                                            defaultRating={review.rating}
                                            size={10}
                                          />
                                        </HStack>
                                      </View>
                                    </VStack>
                                  </Stack>

                                  <Text fontWeight="800">{review.review}</Text>
                                  <Text
                                    fontSize="2xs"
                                    _light={{ color: "amber.500" }}
                                    fontWeight="medium"
                                    ml="-0.5"
                                    mt="-1"
                                  >
                                    {moment(review.createdAt).format("LLL")}
                                  </Text>
                                </Stack>
                              </Pressable>
                            </VStack>
                          );
                        })
                      )}
                    </Box>
                  </ScrollView>
                </Stack>
              </VStack>
            </ScrollView>
          </Box>
        </ScrollView>
      </VStack>
    </>
  );
}
