import React, { useState, useEffect } from "react";
import {
  Box,
  HStack,
  Text,
  VStack,
  Avatar,
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
import { RefreshControl } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import tw from "tailwind-react-native-classnames";
import axios from "axios";
import moment from "moment";

export default function Circuit1(props) {
  const [tabName, setTabName] = useState("Reviews");
  const [review, setInput] = useState("");
  const [Data, setData] = useState([]);

  const Submit = () => {
    axios
      .post(`http://localhost:3000/reviews`, {
        review,
      })
      .then(() => {
        console.log("heyyyyyy");
        // setData((data) => [res.data, ...data]);
        // setData(res.data);
        setInput("");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  const getReview = () => {
    axios
      .get(`https://bycyclebackend.herokuapp.com/reviews`)
      .then((response) => {
        console.log(response.data);
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
            style={tw`mt-4`}
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
              <VStack maxW="1016px" flex={1} width="100%">
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

                  <Card>
                    <Text fontSize="2xl" marginBottom="3">
                      City name
                    </Text>
                    <Text fontWeight="500">
                      Here to describe the place trips.
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
                          lac01 is a town in northern Tunisia located about 20
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

                  <ScrollView showsVerticalScrollIndicator={false}>
                    <Box flex={1}>
                      <VStack space={4}>
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
                            />
                            <Text
                              fontSize="md"
                              _light={{
                                color: "coolGray.800",
                              }}
                            >
                              (3 reviews average)
                            </Text>
                            <Text
                              fontSize="sm"
                              fontWeight="medium"
                              _light={{
                                color: "coolGray.400",
                              }}
                            >
                              (120 )
                            </Text>
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

                      <HStack space="2" mt="5" alignItems="center">
                        <Text
                          fontSize="sm"
                          fontWeight="medium"
                          color="coolGray.400"
                        >
                          By-cycle
                        </Text>
                        <Link
                          ml="auto"
                          _text={{
                            textDecoration: "none",
                          }}
                          _light={{
                            _text: {
                              color: "primary.800",
                              fontSize: "sm",
                              fontWeight: "medium",
                            },
                          }}
                        >
                          Your opinion matters
                        </Link>
                      </HStack>
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                      ></ScrollView>
                      {/* <AddToCartButton base="none" md="flex" /> */}

                      {/* THIS IS THE TAB I WANT TO MAKE LIKE */}
                      <HStack mt="8" space="5">
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
                                shadow={1}
                                _light={{ backgroundColor: "gray.200" }}
                                style={{ margin: 15 }}
                              >
                                <Stack p="4" space={3}>
                                  <Stack space={2}>
                                    {/* <VStack space="1">
                                    <Avatar
                                      source={require("../../../assets/goGreen.jpg")}
                                      height="9"
                                      width="9"
                                    />
                                      <HStack space="1">
                                      <AirbnbRating
                                      showRating={false}
                                      isDisabled={true}
                                      count={5}
                                      reviews={[1, 2, 3, 4, 5]}
                                      defaultRating={4}
                                      size={20}
                                      />
                                    </HStack>
                                    </VStack> */}
                                    <Text
                                      fontSize="xs"
                                      _light={{ color: "amber.500" }}
                                      fontWeight="medium"
                                      ml="-0.5"
                                      mt="-1"
                                    >
                                      {moment(review.createdAt).format("LLL")}
                                    </Text>
                                  </Stack>

                                  <Text fontWeight="400">{review.review}</Text>
                                </Stack>
                              </Pressable>
                            </VStack>
                          );
                        })
                      )}
                      {/* <AddToCartButton base="flex" md="none" /> */}
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
