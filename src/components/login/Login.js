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
import * as Google from "expo-google-app-auth";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function SignInForm({ props }) {
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const [googleSubmitting, setGoogleSubmitting] = useState(false);

  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(type);
  };

  const handleGoogleSignIn = () => {
    setGoogleSubmitting(true);
    const config = {
      iosClientId: `215341427022-haijkikj7ejpthac9sld1ihejeouoj06.apps.googleusercontent.com`,
      androidClientId: `215341427022-eosmagesimfkte0p4b84ci77t6b7m6o2.apps.googleusercontent.com`,
      scopes: ["profile", "email"],
    };
    Google.logInAsync(config)
      .then((result) => {
        const { type, user } = result;
        if (type === "success") {
          const { email, name, photoUrl } = user;
          handleMessage("Google sign in successful", "success");
          setTimeout(
            () => props.navigation.navigate("Home", { email, name, photoUrl }),
            100
          );
        } else {
          handleMessage("Google signin was cancelled");
        }
        setGoogleSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
        handleMessage("An Errr occured . check your Network and try again");
        setGoogleSubmitting(false);
      });
  };

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
              Sign in to continue!
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
                <Link
                  _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "coolGray.800",
                  }}
                  alignSelf="flex-end"
                  mt="1"
                >
                  Forget Password?
                </Link>
                <Checkbox
                  alignItems="flex-start"
                  defaultIsChecked
                  value="demo"
                  colorScheme="primary"
                  accessibilityLabel="Remember me"
                >
                  <HStack alignItems="center">
                    <Text fontSize="sm" color="coolGray.400" pl="2">
                      Remember me{" "}
                    </Text>
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
                  bg: "primary.700",
                }}
                _dark={{
                  bg: "primary.700",
                }}
                onPress={() => {
                  props.navigation.navigate("Home");
                }}
              >
                SIGN IN
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
              <Text
                style={{ color: "black", fontWeight: "500" }}
                onPress={handleGoogleSignIn}
              >
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
            Don't have an account?
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
              props.navigation.navigate("Signup");
            }}
          >
            Sign Up
          </Link>
          {/* Closing Link Tag */}
        </HStack>
      </VStack>
    </KeyboardAwareScrollView>
  );
}

export default function SignIn(props) {
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
        _light={{
          bg: "primary.700",
        }}
        _dark={{
          bg: "primary.700",
        }}
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
                <Text fontSize="3xl" fontWeight="bold" color="amber.400">
                  Welcome back,
                </Text>
                <Text style={tw `text-lg`}
                  fontSize="md"
                  fontWeight="normal"
                  _dark={{
                    color: "amber.400",
                  }}
                  _light={{
                    color: "amber.400",
                  }}
                >
                  Sign in to continue
                </Text>
              </VStack>
            </VStack>
          </Hidden>
          <SignInForm props={props} />
        </Stack>
      </Center>
    </>
  );
}
