import React, { useState, useEffect } from "react";
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
  CheckIcon,
  Slide,
  View,
} from "native-base";
import axios from "axios";
import instance from "../../../android/app/src/helpers/axiosInstance";
import tw from "tailwind-react-native-classnames";
import * as Google from "expo-google-app-auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

/* const instance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
  headers: { "x-token": "7ot el token ya wissem" },
}); */
import { signIn } from "../services/auth";
import { TouchableOpacity } from "react-native-gesture-handler";
import { alignItems } from "styled-system";
export function SignInForm({ props }) {
  const [isOpen, setIsOpen] = React.useState(false);

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
      androidStandaloneAppClientId: `215341427022-ktifsf6rj56ubln7ddtac012o0s4rlb5.apps.googleusercontent.com`,

      scopes: ["profile", "email"],
    };
    Google.logInAsync(config)
      .then((result) => {
        const { type, user } = result;
        if (type === "success") {
          const { email, name, photoUrl } = user;
          handleMessage("Google sign in successful", "success");
          setTimeout(
            () => props.navigation.navigate("WhyUs", { email, name, photoUrl }),
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        py="4"
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
        <VStack>
          <Hidden till="md">
            <Text fontSize="lg" fontWeight="normal">
              Sign in to continue!
            </Text>
          </Hidden>
          <VStack>
            <VStack>
              <View style={tw`items-center`}>
                <Image
                  style={tw`w-16 h-16`}
                  source={require("../../../assets/LogoBike.png")}
                  alt="image"
                />
              </View>
              {/* Opening Link Tag navigateTo:"OTP" (react/Router) */}
              <FormControl style={tw`mt-12`}>
                <FormControl.Label
                  _text={{
                    color: "coolGray.800",
                    fontSize: "xs",
                    fontWeight: 500,
                  }}
                >
                  Email
                </FormControl.Label>
                <Input
                  type="email"
                  name="email"
                  autoCapitalize="none"
                  placeholder="Email"
                  onChangeText={(value) => setEmail(value)}
                />
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
                <Input
                  type="password"
                  name="password"
                  autoCapitalize="none"
                  placeholder="Password"
                  onChangeText={(value) => setPassword(value)}
                />
                <Link
                  _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "amber.400",
                  }}
                  alignSelf="flex-end"
                  mt="1"
                  sin
                >
                  Forget Password?
                </Link>
                <Checkbox
                  marginTop={3}
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

              <View style={{ alignItems: "center" }}>
                <Button
                  mt="24"
                  height={10}
                  width={363}
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
                    signIn({ email, password }).then(() => {
                      setIsOpen(true);
                      setTimeout(
                        () => props.navigation.navigate("WhyUs"),
                        1300
                      );
                    });
                  }}
                >
                  SIGN IN
                </Button>

              </View>
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
                    bg: "coolGray.700",
                  }}
                  _dark={{
                    bg: "coolGray.700",
                  }}
                ></Divider>
                <Text
                  fontWeight="medium"
                  _light={{
                    color: "coolGray.800",
                  }}
                  _dark={{
                    color: "coolGray.800",
                  }}
                >
                  or
                </Text>
                <Divider
                  w="30%"
                  _light={{
                    bg: "coolGray.700",
                  }}
                  _dark={{
                    bg: "coolGray.700",
                  }}
                ></Divider>
              </HStack>
            </VStack>

            <Slide in={isOpen} placement="bottom">
              <Box
                w="100%"
                position="absolute"
                bottom="24"
                p="2"
                borderRadius="xs"
                bg="green.300"
                alignItems="center"
                justifyContent="center"
                _dark={{
                  bg: "amber.200",
                }}
              >
                <HStack space={2}>
                  <CheckIcon
                    size="4"
                    color="green.800"
                    mt="1"
                    _dark={{
                      color: "amber.700",
                    }}
                  />
                  <Text
                    color="gray.600"
                    textAlign="center"
                    _dark={{
                      color: "gray.700",
                    }}
                    fontWeight="medium"
                  >
                    Welcome Back!
                  </Text>
                </HStack>
              </Box>
            </Slide>
            {/* <Button
              mt="5"
              size="lg"
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
            > */}
            {/* <Text
                style={{ color: "black", fontWeight: "500" }}
                onPress={handleGoogleSignIn}
              >
                <Image
                  style={{ height: 15, width: 45 }}
                  source={require("../../../assets/ggl.png")}
                  alt="image"
                />
              </Text> */}
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  backgroundColor: "#E2E2E2",
                  width: 250,
                  height: 35,
                  borderRadius: 4,
                }}
                onPress={handleGoogleSignIn}
              >
                <Image
                  style={{ height: 20, width: 60, marginTop: 8 }}
                  source={require("../../../assets/ggl.png")}
                  alt="image"
                />
              </TouchableOpacity>
            </View>
            {/* </Button> */}
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
                <Text
                  style={tw`text-lg`}
                  fontWeight="normal"
                  _dark={{
                    color: "amber.400",
                  }}
                  _light={{
                    color: "white",
                  }}
                >
                  Sign In to continue
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
