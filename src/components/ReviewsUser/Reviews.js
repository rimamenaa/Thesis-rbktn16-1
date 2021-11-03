import React from "react";
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  StatusBar,
  Avatar,
  Image,
  Input,
  useColorMode,
  ScrollView,
  Pressable,
  Center,
  Divider,
  Button,
  IconButton,
  Stack,
  Link,
  Hidden,
  Menu,
  View,
} from "native-base";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
const categories = [
  {
    category: "Family packages",
  },
  {
    category: "Couple packages",
  },
  {
    category: "0-3 S",
  },
];
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
    <>
      <Box
        safeAreaTop
        _light={{
          bg: "primary.200",
        }}
        _dark={{
          bg: "coolGray.100",
        }}
      />

     
      <VStack
        flex={1}
        _light={{
          bg: "primary.50",
        }}
        _dark={{
          bg: "customGray",
        }}
      >
         <ScrollView>
        <Box
          style={tw `mt-4`}
          flex={1}
          flexDirection={{
            base: "column",
            md: "row",
          }}
          _light={{
            borderTopColor: "coolGray.200",
          }}
          _dark={{
            bg: "coolGray.800",
            borderTopColor: "coolGray.700",
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
                _dark={{
                  borderColor: "coolGray.700",
                  bg: {
                    md: "coolGray.900",
                    base: "coolGray.800",
                  },
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
                <Box
                  p="2"
                  bg="primary.100"
                  borderRadius="md"
                  alignItems="center"
                  w={{
                    base: "100%",
                    md: "50%",
                  }}
                  h={{
                    base: "40%",
                    md: "auto",
                  }}
                  pr={{
                    base: "2",
                    md: "4",
                  }}
                  justifyContent="center"
                >
                  
                  <Image
                    width="full"
                    height={{
                      base: "full",
                      md: "full",
                    }}
                    rounded="lg"
                    alt="Alternate Text"
                    source={require("../../../assets/sidibou.png")}
                  />
                     {/* <Image
                    width="full"
                    height={{
                      base: "full",
                      md: "full",
                    }}
                    rounded="lg"
                    alt="Alternate Text"
                    source={require("../../../assets/sidibou2.png")}
                  /> */}
                  
                     {/* <Image
                    width="full"
                    height={{
                      base: "full",
                      md: "full",
                    }}
                    rounded="lg"
                    alt="Alternate Text"
                    source={require("../../../assets/sidibou3.png")}
                  /> */}
                  
                </Box>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <Box
                    flex={1}
                    px={{
                      base: "4",
                    }}
                  >
                    <VStack space={1}>
                      <HStack
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Text
                          fontSize="lg"
                          _light={{
                            color: "coolGray.800",
                          }}
                          _dark={{
                            color: "coolGray.50",
                          }}
                        >
                          Ratings
                        </Text>
                        <HStack alignItems="center" space="1">
                          <Icon
                            size="4"
                            name={"star"}
                            as={AntDesign}
                            color="amber.400"
                          />
                          <Text
                            fontSize="md"
                            _light={{
                              color: "coolGray.800",
                            }}
                            _dark={{
                              color: "coolGray.50",
                            }}
                          >
                            4.9
                          </Text>
                          <Text
                            fontSize="sm"
                            fontWeight="medium"
                            _light={{
                              color: "coolGray.400",
                            }}
                            _dark={{
                              color: "coolGray.300",
                            }}
                          >
                            (120)
                          </Text>
                        </HStack>
                      </HStack>

                      <Text
                        fontSize="xs"
                        fontWeight="medium"
                        _light={{
                          color: "coolGray.800",
                        }}
                        _dark={{
                          color: "coolGray.50",
                        }}
                      >
                        277 Reviews
                      </Text>
                    </VStack>

                    <HStack space="2" mt="5" alignItems="center">
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="coolGray.400"
                      >
                        (By-cycle)
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
                        _dark={{
                          _text: {
                            color: "primary.400",
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
                    >
                      <Button.Group space="2" mt={3} alignItems="center">
                        {categories.map((item) => {
                          return (
                            <Button
                              py="4"
                              px="5"
                              borderRadius="4"
                              variant="subtle"
                              _text={{
                                _dark: {
                                  color: "coolGray.50",
                                },
                                _light: {
                                  color: "coolGray.800",
                                },
                                fontWeight: "normal",
                              }} //@ts-ignore
                              _light={{
                                colorScheme: "primary",
                              }}
                              _dark={{
                                bg: "coolGray.100",
                                //@ts-ignore
                                colorScheme: "dark",
                              }}
                            >
                              {item.category}
                            </Button>
                          );
                        })}
                      </Button.Group>
                    </ScrollView>
                    {/* <AddToCartButton base="none" md="flex" /> */}
                    <HStack mt="8" space="5">
                      <Pressable
                        onPress={() => {
                          setTabName("Description");
                        }}
                      >
                        <Text
                          fontSize="16"
                          fontWeight="medium"
                          letterSpacing="0.4"
                          _light={{
                            color:
                              tabName == "Description"
                                ? "primary.900"
                                : "coolGray.400",
                          }}
                          _dark={{
                            color:
                              tabName == "Description"
                                ? "coolGray.50"
                                : "coolGray.400",
                          }}
                        >
                          Description
                        </Text>
                        {tabName == "Description" ? (
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
                          _dark={{
                            color:
                              tabName == "Reviews"
                                ? "coolGray.50"
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
                    {tabName === "Description" ? (
                      <Text
                        mt="3"
                        fontSize="sm"
                        lineHeight="lg"
                        fontWeight="medium"
                        letterSpacing="0.3"
                        _light={{
                          color: "coolGray.800",
                        }}
                        _dark={{
                          color: "coolGray.50",
                        }}
                      >
                        Sidi Bou Said is a town in northern Tunisia located about 20 km from the capital, Tunis.
                        Cafe de delice and coast view Named for a religious figure who lived there, Abu Said al-Baji, 
                        it was previously called Jabal el-Menar. The town itself is a tourist attraction and is known 
                        for its extensive use of blue and white. It can be reached by a TGM train, which runs from Tunis 
                        to La Marsa.
                      </Text>
                    ) : (
                      reviews.map((item, idx) => {
                        return (
                          <VStack my="3" px="4" key={idx}>
                            <HStack justifyContent="space-between">
                              <HStack space="3">
                                <Avatar
                                  source={{
                                    uri: item.imageUrl,
                                  }}
                                  height="9"
                                  width="9"
                                />
                                <VStack space="1">
                                  <Text
                                    fontSize="sm"
                                    fontWeight="semibold"
                                    _dark={{
                                      color: "coolGray.50",
                                    }}
                                    _light={{
                                      color: "coolGray.800",
                                    }}
                                  >
                                    {item.name}
                                  </Text>
                                  <HStack space="1">
                                    <Icon
                                      size="4"
                                      name="star"
                                      as={AntDesign}
                                      color="amber.400"
                                    />
                                  </HStack>
                                </VStack>
                              </HStack>
                              <Text
                                fontSize="sm"
                                _light={{
                                  color: "coolGray.500",
                                }}
                                _dark={{
                                  color: "coolGray.300",
                                }}
                              >
                                {item.time}
                              </Text>
                            </HStack>
                            <Text
                              alignItems="center"
                              lineHeight="lg"
                              mt="4"
                              _light={{
                                color: "coolGray.500",
                              }}
                              _dark={{
                                color: "coolGray.300",
                              }}
                              fontSize="md"
                            >
                              {item.review}
                            </Text>
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

        <Box
          style={tw `mt-4`}
          flex={1}
          flexDirection={{
            base: "column",
            md: "row",
          }}
          _light={{
            borderTopColor: "coolGray.200",
          }}
          _dark={{
            bg: "coolGray.800",
            borderTopColor: "coolGray.700",
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
                _dark={{
                  borderColor: "coolGray.700",
                  bg: {
                    md: "coolGray.900",
                    base: "coolGray.800",
                  },
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
                <Box
                  p="2"
                  bg="primary.100"
                  borderRadius="md"
                  alignItems="center"
                  w={{
                    base: "100%",
                    md: "50%",
                  }}
                  h={{
                    base: "40%",
                    md: "auto",
                  }}
                  pr={{
                    base: "2",
                    md: "4",
                  }}
                  justifyContent="center"
                >
                  <Image
                    width="full"
                    height={{
                      base: "full",
                      md: "full",
                    }}
                    rounded="lg"
                    alt="Alternate Text"
                    source={require("../../../assets/marsa1.png")}
                  />
                </Box>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <Box
                    flex={1}
                    px={{
                      base: "4",
                    }}
                  >
                    <VStack space={1}>
                      <HStack
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Text
                          fontSize="lg"
                          _light={{
                            color: "coolGray.800",
                          }}
                          _dark={{
                            color: "coolGray.50",
                          }}
                        >
                          Ratings
                        </Text>
                        <HStack alignItems="center" space="1">
                          <Icon
                            size="4"
                            name={"star"}
                            as={AntDesign}
                            color="amber.400"
                          />
                          <Text
                            fontSize="md"
                            _light={{
                              color: "coolGray.800",
                            }}
                            _dark={{
                              color: "coolGray.50",
                            }}
                          >
                            4.9
                          </Text>
                          <Text
                            fontSize="sm"
                            fontWeight="medium"
                            _light={{
                              color: "coolGray.400",
                            }}
                            _dark={{
                              color: "coolGray.300",
                            }}
                          >
                            (120)
                          </Text>
                        </HStack>
                      </HStack>

                      <Text
                        fontSize="xs"
                        fontWeight="medium"
                        _light={{
                          color: "coolGray.800",
                        }}
                        _dark={{
                          color: "coolGray.50",
                        }}
                      >
                        277 Reviews
                      </Text>
                    </VStack>

                    <HStack space="2" mt="5" alignItems="center">
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="coolGray.400"
                      >
                        (By-cycle)
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
                        _dark={{
                          _text: {
                            color: "primary.400",
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
                    >
                      <Button.Group space="2" mt={3} alignItems="center">
                        {categories.map((item) => {
                          return (
                            <Button
                              py="4"
                              px="5"
                              borderRadius="4"
                              variant="subtle"
                              _text={{
                                _dark: {
                                  color: "coolGray.50",
                                },
                                _light: {
                                  color: "coolGray.800",
                                },
                                fontWeight: "normal",
                              }} //@ts-ignore
                              _light={{
                                colorScheme: "primary",
                              }}
                              _dark={{
                                bg: "coolGray.100",
                                //@ts-ignore
                                colorScheme: "dark",
                              }}
                            >
                              {item.category}
                            </Button>
                          );
                        })}
                      </Button.Group>
                    </ScrollView>
                    {/* <AddToCartButton base="none" md="flex" /> */}
                    <HStack mt="8" space="5">
                      <Pressable
                        onPress={() => {
                          setTabName("Description");
                        }}
                      >
                        <Text
                          fontSize="16"
                          fontWeight="medium"
                          letterSpacing="0.4"
                          _light={{
                            color:
                              tabName == "Description"
                                ? "primary.900"
                                : "coolGray.400",
                          }}
                          _dark={{
                            color:
                              tabName == "Description"
                                ? "coolGray.50"
                                : "coolGray.400",
                          }}
                        >
                          Description
                        </Text>
                        {tabName == "Description" ? (
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
                          _dark={{
                            color:
                              tabName == "Reviews"
                                ? "coolGray.50"
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
                    {tabName === "Description" ? (
                      <Text
                        mt="3"
                        fontSize="sm"
                        lineHeight="lg"
                        fontWeight="medium"
                        letterSpacing="0.3"
                        _light={{
                          color: "coolGray.800",
                        }}
                        _dark={{
                          color: "coolGray.50",
                        }}
                      >
                        La Perle du Lac, an illustration of the impeccable aesthetic reintegration of water bodies into the urban zone, 
                        is an exceptional area composed of judiciously and coherently arranged residences that value space harmony.
                        The city, which will be built on 230 hectares outspreads from the Berges du Lac to Tunis city center as its direct extension, 
                        meets the designers’ ambitions to make it a large metropolis giving Tunis a new face mirrored in water.
                      </Text>
                    ) : (
                      reviews.map((item, idx) => {
                        return (
                          <VStack my="3" px="4" key={idx}>
                            <HStack justifyContent="space-between">
                              <HStack space="3">
                                <Avatar
                                  source={{
                                    uri: item.imageUrl,
                                  }}
                                  height="9"
                                  width="9"
                                />
                                <VStack space="1">
                                  <Text
                                    fontSize="sm"
                                    fontWeight="semibold"
                                    _dark={{
                                      color: "coolGray.50",
                                    }}
                                    _light={{
                                      color: "coolGray.800",
                                    }}
                                  >
                                    {item.name}
                                  </Text>
                                  <HStack space="1">
                                    <Icon
                                      size="4"
                                      name="star"
                                      as={AntDesign}
                                      color="amber.400"
                                    />
                                  </HStack>
                                </VStack>
                              </HStack>
                              <Text
                                fontSize="sm"
                                _light={{
                                  color: "coolGray.500",
                                }}
                                _dark={{
                                  color: "coolGray.300",
                                }}
                              >
                                {item.time}
                              </Text>
                            </HStack>
                            <Text
                              alignItems="center"
                              lineHeight="lg"
                              mt="4"
                              _light={{
                                color: "coolGray.500",
                              }}
                              _dark={{
                                color: "coolGray.300",
                              }}
                              fontSize="md"
                            >
                              {item.review}
                            </Text>
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

        <Box
          style={tw `mt-4`}
          flex={1}
          flexDirection={{
            base: "column",
            md: "row",
          }}
          _light={{
            borderTopColor: "coolGray.200",
          }}
          _dark={{
            bg: "coolGray.800",
            borderTopColor: "coolGray.700",
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
                _dark={{
                  borderColor: "coolGray.700",
                  bg: {
                    md: "coolGray.900",
                    base: "coolGray.800",
                  },
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
                <Box
                  p="2"
                  bg="primary.100"
                  borderRadius="md"
                  alignItems="center"
                  w={{
                    base: "100%",
                    md: "50%",
                  }}
                  h={{
                    base: "40%",
                    md: "auto",
                  }}
                  pr={{
                    base: "2",
                    md: "4",
                  }}
                  justifyContent="center"
                >
                  <Image
                    width="full"
                    height={{
                      base: "full",
                      md: "full",
                    }}
                    rounded="lg"
                    alt="Alternate Text"
                    source={require("../../../assets/lac01.png")}
                  />
                </Box>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <Box
                    flex={1}
                    px={{
                      base: "4",
                    }}
                  >
                    <VStack space={1}>
                      <HStack
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Text
                          fontSize="lg"
                          _light={{
                            color: "coolGray.800",
                          }}
                          _dark={{
                            color: "coolGray.50",
                          }}
                        >
                          Ratings
                        </Text>
                        <HStack alignItems="center" space="1">
                          <Icon
                            size="4"
                            name={"star"}
                            as={AntDesign}
                            color="amber.400"
                          />
                          <Text
                            fontSize="md"
                            _light={{
                              color: "coolGray.800",
                            }}
                            _dark={{
                              color: "coolGray.50",
                            }}
                          >
                            4.9
                          </Text>
                          <Text
                            fontSize="sm"
                            fontWeight="medium"
                            _light={{
                              color: "coolGray.400",
                            }}
                            _dark={{
                              color: "coolGray.300",
                            }}
                          >
                            (120)
                          </Text>
                        </HStack>
                      </HStack>

                      <Text
                        fontSize="xs"
                        fontWeight="medium"
                        _light={{
                          color: "coolGray.800",
                        }}
                        _dark={{
                          color: "coolGray.50",
                        }}
                      >
                        277 Reviews
                      </Text>
                    </VStack>

                    <HStack space="2" mt="5" alignItems="center">
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="coolGray.400"
                      >
                        (By-cycle)
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
                        _dark={{
                          _text: {
                            color: "primary.400",
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
                    >
                      <Button.Group space="2" mt={3} alignItems="center">
                        {categories.map((item) => {
                          return (
                            <Button
                              py="4"
                              px="5"
                              borderRadius="4"
                              variant="subtle"
                              _text={{
                                _dark: {
                                  color: "coolGray.50",
                                },
                                _light: {
                                  color: "coolGray.800",
                                },
                                fontWeight: "normal",
                              }} //@ts-ignore
                              _light={{
                                colorScheme: "primary",
                              }}
                              _dark={{
                                bg: "coolGray.100",
                                //@ts-ignore
                                colorScheme: "dark",
                              }}
                            >
                              {item.category}
                            </Button>
                          );
                        })}
                      </Button.Group>
                    </ScrollView>
                    {/* <AddToCartButton base="none" md="flex" /> */}
                    <HStack mt="8" space="5">
                      <Pressable
                        onPress={() => {
                          setTabName("Description");
                        }}
                      >
                        <Text
                          fontSize="16"
                          fontWeight="medium"
                          letterSpacing="0.4"
                          _light={{
                            color:
                              tabName == "Description"
                                ? "primary.900"
                                : "coolGray.400",
                          }}
                          _dark={{
                            color:
                              tabName == "Description"
                                ? "coolGray.50"
                                : "coolGray.400",
                          }}
                        >
                          Description
                        </Text>
                        {tabName == "Description" ? (
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
                          _dark={{
                            color:
                              tabName == "Reviews"
                                ? "coolGray.50"
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
                    {tabName === "Description" ? (
                      <Text
                        mt="3"
                        fontSize="sm"
                        lineHeight="lg"
                        fontWeight="medium"
                        letterSpacing="0.3"
                        _light={{
                          color: "coolGray.800",
                        }}
                        _dark={{
                          color: "coolGray.50",
                        }}
                      >
                        is a coastal town in far north eastern Tunisia near the capital Tunis. The population is estimated as 92,987, as of 2014. 
                        The old summer capital of pre-colonial Tunisia, it is today a popular vacation spot for many wealthy Tunisians. 
                        It is connected to Tunis by the TGM railway. Gammarth is adjacent to El Marsa further up the coast.
                      </Text>
                    ) : (
                      reviews.map((item, idx) => {
                        return (
                          <VStack my="3" px="4" key={idx}>
                            <HStack justifyContent="space-between">
                              <HStack space="3">
                                <Avatar
                                  source={{
                                    uri: item.imageUrl,
                                  }}
                                  height="9"
                                  width="9"
                                />
                                <VStack space="1">
                                  <Text
                                    fontSize="sm"
                                    fontWeight="semibold"
                                    _dark={{
                                      color: "coolGray.50",
                                    }}
                                    _light={{
                                      color: "coolGray.800",
                                    }}
                                  >
                                    {item.name}
                                  </Text>
                                  <HStack space="1">
                                    <Icon
                                      size="4"
                                      name="star"
                                      as={AntDesign}
                                      color="amber.400"
                                    />
                                  </HStack>
                                </VStack>
                              </HStack>
                              <Text
                                fontSize="sm"
                                _light={{
                                  color: "coolGray.500",
                                }}
                                _dark={{
                                  color: "coolGray.300",
                                }}
                              >
                                {item.time}
                              </Text>
                            </HStack>
                            <Text
                              alignItems="center"
                              lineHeight="lg"
                              mt="4"
                              _light={{
                                color: "coolGray.500",
                              }}
                              _dark={{
                                color: "coolGray.300",
                              }}
                              fontSize="md"
                            >
                              {item.review}
                            </Text>
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
