import React, { useState } from "react";
import {
  Button,
  HStack,
  VStack,
  Text,
  Link,
  Checkbox,
  Divider,
  IconButton,
  Icon,
  Center,
  Hidden,
  StatusBar,
  Stack,
  Box,
  FormControl,
  Input,
  Image
 
 
} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import tw from "tailwind-react-native-classnames";


import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function SignInForm({ props }) {
  // add next router here
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = React.useState(false);
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
              >
               
              </VStack>
             
              {/* Opening Link Tag navigateTo:"OTP" (react/Router) */}
              <FormControl>
            <FormControl.Label
              _text={{
                color: 'coolGray.800',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
              Email ID
            </FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                color: 'coolGray.800',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
              Password
            </FormControl.Label>
            <Input type="password" />
            <Link
              _text={{ fontSize: 'xs', fontWeight: '500', color: 'yellow.500' }}
              alignSelf="flex-end"
              mt="1">
              Forget Password?
            </Link>
            <Checkbox
                alignItems="flex-start"
                mt="5"
                isChecked
                value="demo"
                colorScheme="primary"
                accessibilityLabel="Remember me"
              >
                <Text
                  pl="3"
                  fontWeight="normal"
                  _light={{
                    color: "coolGray.800",
                  }}
                  _dark={{
                    color: "coolGray.400",
                  }}
                >
                  Remember me and keep me logged in
                </Text>
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
                  props.navigation.navigate("OTP");
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
            
            <Button  mt="5"
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
                }}><Text style={{color:"black",fontWeight:"500"}}><Image style={{height:12,width:12}}
            source={require("../../../assets/ggl.png")}
            alt="image"
          />GOOGLE</Text></Button>
    
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
              props.navigation.navigate("SignUp");
            }}
          >
            Sign up
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
      <Center
        my="auto"
        flex="1"
      >
         {/* <Image
         resizeMode={"contain"}
      source={{
        uri: "https://media.discordapp.net/attachments/902219842738856050/903297989571907585/1_8.png?width=308&height=669",
      }}
      alt="Alternate Text"
      style={{width: 347, height: 812}}
    /> */}
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
                <Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
                  Welcome back,
                </Text>
                <Text
                  fontSize="md"
                  fontWeight="normal"
                  _dark={{
                    color: "coolGray.400",
                  }}
                  _light={{
                    color: "primary.300",
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
