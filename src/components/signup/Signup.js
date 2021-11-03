<<<<<<< HEAD
import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Button,
  StyleSheet,
  CheckBox,
  ImageBackground,
} from "react-native";
import tw from "tailwind-react-native-classnames";
export default function Signup() {
  return (
    <View style={tw`w-full h-full`}>
      <ImageBackground
        style={tw`w-full h-full`}
        source={require("../../../assets/back.png")}
      >
        <View>
          <Text
            style={tw`mt-12 items-center ml-28 font-bold text-gray-700 text-base`}
          >
            Create An Account
          </Text>
        </View>
        <View style={tw`h-3/5 mt-24 w-11/12 ml-4 bg-gray-100 rounded`}>
          <View style={tw` mt-4 w-4/5 ml-8 flex `}>
            <TextInput
              style={tw` h-10 rounded bg-white`}
              type="text"
              placeholder="name"
            />
            <TextInput
              style={tw` h-10 mt-4 rounded bg-white`}
              type="text"
              placeholder="username"
            />
            <TextInput
              style={tw` h-10 mt-4 rounded bg-white`}
              type="text"
              placeholder="email"
            />
            <TextInput
              style={tw`mt-4 mt-4 rounded h-10 bg-white `}
              secureTextEntry={true}
              placeholder="password"
            />
          </View>
          <View style={tw`pt-4 w-4/5 ml-8`}>
            <Button title="Sign Up" color="#2F2C2C" />
          </View>
          <View style={tw` items-center pt-6 `}>
            <Text style={tw`  text-gray-500 font-bold text-xs`}>
              Or Sign Up with credentials{" "}
            </Text>
          </View>
          <View
            style={tw`border border-white items-center bg-white mt-8 rounded w-4/5 ml-8 h-8`}
          >
            <View style={tw`flex flex-row`}>
              <Image
                style={tw`mt-1.5 w-4 pl-2 h-4`}
                source={require("../../../assets/ggl.png")}
              />
              <Text style={tw`mt-1 pl-6 font-bold text-black`}>GOOGLE</Text>
            </View>
          </View>
          <View style={tw`flex flex-row`}>
            {/* <CheckBox style={tw `mt-6 ml-8`}/> */}
            <Text style={tw`pl-8 mt-4 text-black`}>
              I Agree With The{" "}
              <Text style={tw`text-yellow-300`}>Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
=======
import React, { useState } from "react";
import {
  Button,
  HStack,
  VStack,
  Text,
  Link,
  Checkbox,
  Divider,
 
  Center,
  Hidden,
  StatusBar,
  Stack,
  Box,
  FormControl,
  Input,
  Image,
} from "native-base";

import tw from "tailwind-react-native-classnames";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function SignUpForm({ props }) {
  // add next router here
  
  return (
    
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{
        flex: 1,
      }}
    >
      <VStack
        flex="1"
        px="6"
        py="9"
        _light={{
          bg: "white",
        }}
        _dark={{
          bg: "coolGray.800",
        }}
        space="3"
        justifyContent="space-between"
        borderTopRightRadius={{
          base: "2xl",
          md: "xl",
        }}
        borderBottomRightRadius={{
          base: "0",
          md: "xl",
        }}
        borderTopLeftRadius={{
          base: "2xl",
          md: "0",
        }}
      >
        <VStack space="7">
          <Hidden till="md">
            <Text fontSize="lg" fontWeight="normal">
              Sign Up to continue!
            </Text>
          </Hidden>
          <VStack>
            <VStack space="3">
              <VStack
                space={{
                  base: "7",
                  md: "4",
                }}
              ></VStack>

              {/* Opening Link Tag navigateTo:"OTP" (react/Router) */}
              <FormControl>
                <FormControl.Label
                  _text={{
                    color: "coolGray.800",
                    fontSize: "xs",
                    fontWeight: 500,
                  }}
                >
                  Name
                </FormControl.Label>
                <Input />
              </FormControl>

                <FormControl>
                <FormControl.Label
                  _text={{
                    color: "coolGray.800",
                    fontSize: "xs",
                    fontWeight: 500,
                  }}
                >
                  Username
                </FormControl.Label>
                <Input />
              </FormControl>   

              <FormControl>
                <FormControl.Label
                  _text={{
                    color: "coolGray.800",
                    fontSize: "xs",
                    fontWeight: 500,
                  }}
                >
                  Email ID
                </FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label
                  _text={{
                    color: "coolGray.800",
                    fontSize: "xs",
                    fontWeight: 500,
                  }}
                >
                  Password
                </FormControl.Label>
                <Input type="password" />
                <Checkbox
                style={tw `mt-2`}
                alignItems="flex-start"
                defaultIsChecked
                value="demo"
                colorScheme="primary"
                accessibilityLabel="Remember me"
              >
                <HStack alignItems="center" style={tw `mt-2`}>
                  <Text fontSize="sm" color="coolGray.400" pl="2">
                    I accept the{" "}
                  </Text>
                  <Link
                    _text={{
                      fontSize: "sm",
                      fontWeight: "semibold",
                      textDecoration: "none",
                    }}
                    _light={{
                      _text: {
                        color: "primary.900",
                      },
                    }}
                    _dark={{
                      _text: {
                        color: "primary.500",
                      },
                    }}
                  >
                    Terms of Use
                  </Link>
                  <Text fontSize="sm"> & </Text>

                  <Link
                    _text={{
                      fontSize: "sm",
                      fontWeight: "semibold",
                      textDecoration: "none",
                    }}
                    _light={{
                      _text: {
                        color: "primary.900",
                      },
                    }}
                    _dark={{
                      _text: {
                        color: "primary.500",
                      },
                    }}
                  >
                    Privacy Policy
                  </Link>
                </HStack>
              </Checkbox>
              </FormControl>
              <Button
                mt="5"
                size="md"
                borderRadius="4"
                _text={{
                  fontWeight: "medium",
                }}
                _light={{
                  bg: "primary.800",
                }}
                _dark={{
                  bg: "primary.700",
                }}
                onPress={() => {
                  props.navigation.navigate("Home");
                }}
              >
                SIGN UP
              </Button>
              {/* Closing Link Tag */}
              <HStack
                mt="5"
                space="2"
                mb={{
                  base: 6,
                  md: 7,
                }}
                alignItems="center"
                justifyContent="center"
              >
                <Divider
                  w="30%"
                  _light={{
                    bg: "coolGray.200",
                  }}
                  _dark={{
                    bg: "coolGray.700",
                  }}
                ></Divider>
                <Text
                  fontWeight="medium"
                  _light={{
                    color: "coolGray.300",
                  }}
                  _dark={{
                    color: "coolGray.500",
                  }}
                >
                  or
                </Text>

                <Divider
                  w="30%"
                  _light={{
                    bg: "coolGray.200",
                  }}
                  _dark={{
                    bg: "coolGray.700",
                  }}
                ></Divider>
              </HStack>
            </VStack>

            <Button
              mt="5"
              size="md"
              borderRadius="4"
              _text={{
                fontWeight: "medium",
              }}
              _light={{
                bg: "gray.200",
              }}
              _dark={{
                bg: "primary.700",
              }}
            >
              <Text style={{ color: "black", fontWeight: "500" }}>
                <Image
                  style={{ height: 12, width: 12 }}
                  source={require("../../../assets/ggl.png")}
                  alt="image"
                />
                GOOGLE
              </Text>
            </Button>
          </VStack>
        </VStack>
        <HStack
          mb="4"
          space="1"
          safeAreaBottom
          alignItems="center"
          justifyContent="center"
          mt={{
            base: "auto",
            md: "8",
          }}
        >
          <Text
            _light={{
              color: "coolGray.800",
            }}
            _dark={{
              color: "coolGray.400",
            }}
          >
            Already have an account
          </Text>
          {/* Opening Link Tag navigateTo:"SignUp" */}
          <Link
            _text={{
              fontWeight: "bold",
              textDecoration: "none",
            }}
            _light={{
              _text: {
                color: "yellow.400",
              },
            }}
            _dark={{
              _text: {
                color: "primary.500",
              },
            }}
            onPress={() => {
              props.navigation.navigate("Login");
            }}
          >
            Sign In
          </Link>
          {/* Closing Link Tag */}
        </HStack>
      </VStack>
    </KeyboardAwareScrollView>
  );
}

export default function Signup(props) {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        _light={{
          bg: "primary.900",
        }}
        _dark={{
          bg: "coolGray.900",
        }}
      />
      <Center my="auto" flex="1">
        <Stack
          flexDirection={{
            base: "column",
            md: "row",
          }}
          w="100%"
          maxW={{
            md: "1016px",
          }}
          flex={{
            base: "1",
            md: "none",
          }}
        >
          <Hidden from="md">
            <VStack px="4" mt="4" mb="5" space="9">
              <VStack space="2">
                <Text fontSize="3xl" fontWeight="bold" color="coolGray.700">
                  Welcome back,
                </Text>
                <Text
                  fontSize="md"
                  fontWeight="normal"
                  _dark={{
                    color: "coolGray.400",
                  }}
                  _light={{
                    color: "primary.700",
                  }}
                >
                  Sign in to continue
                </Text>
              </VStack>
            </VStack>
          </Hidden>
          <SignUpForm props={props} />
        </Stack>
      </Center>
    </>
>>>>>>> 554a49f18530265e127aa6c3806676a79cbaed78
  );
}
