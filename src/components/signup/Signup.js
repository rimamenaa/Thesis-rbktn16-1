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
  Slide,
  CheckIcon,
} from "native-base";

import tw from "tailwind-react-native-classnames";
import * as Google from "expo-google-app-auth";
import { signUp } from "../services/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function SignUpForm({ props }) {
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const [googleSubmitting, setGoogleSubmitting] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

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
  const [fullname, setFullName] = useState("");

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
                  Full Name
                </FormControl.Label>
                <Input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  onChangeText={(value) => {
                    setFullName(value);
                  }}
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
                  Email
                </FormControl.Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChangeText={(value) => {
                    setEmail(value);
                  }}
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
                  placeholder="Password"
                  onChangeText={(value) => {
                    setPassword(value);
                  }}
                />
                <Checkbox
                  style={tw`mt-2`}
                  alignItems="flex-start"
                  defaultIsChecked
                  value="demo"
                  colorScheme="primary"
                  accessibilityLabel="Remember me"
                >
                  <HStack alignItems="center" style={tw`mt-2`}>
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
                          color: "amber.400",
                        },
                      }}
                      _dark={{
                        _text: {
                          color: "amber.400",
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
                          color: "amber.400",
                        },
                      }}
                      _dark={{
                        _text: {
                          color: "amber.400",
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
                  bg: "primary.700",
                }}
                _dark={{
                  bg: "primary.700",
                }}
                onPress={() => {
                  signUp({ fullname, email, password }).then(() => {
                    setIsOpen(true);
                    setTimeout(() => props.navigation.navigate("Login"), 2000);
                  });
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
                    Account Successfully Created!
                  </Text>
                </HStack>
              </Box>
            </Slide>
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
                  style={{ height: 15, width: 45 }}
                  source={require("../../../assets/ggl.png")}
                  alt="image"
                />
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
                color: "amber.400",
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
                    color: "coolGray.400",
                  }}
                  _light={{
                    color: "white",
                  }}
                >
                  Sign Up to continue
                </Text>
              </VStack>
            </VStack>
          </Hidden>
          <SignUpForm props={props} />
        </Stack>
      </Center>
    </>
  );
}
