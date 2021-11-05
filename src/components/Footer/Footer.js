
import React from 'react';
import {
  NativeBaseProvider,
  Box,
  Text,
  Icon,
  HStack,
  Center,
  Pressable
} from 'native-base';
import { MaterialCommunityIcons, Entypo, Ionicons  } from '@expo/vector-icons';
import Commercial from '../commercial/Commercial';
import Profile from '../Profile/Profile';
import LandingPage from '../LandingPage/LandingPage';

export default function Footer({ navigation }) {
  const [selected, setSelected] = React.useState(1);
  return (
    
    <NativeBaseProvider>
      <Box flex={1}  safeAreaTop>
        <Center flex={1}></Center>
        <HStack bg="gray.700" alignItems="center" safeAreaBottom shadow={6}>

          <Pressable
            // cursor="pointer"
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => {
                navigation.navigate(Profile);
              }}
          >
            <Center>
              <Icon
                mb={1}
                as={
                  <Ionicons name="ios-person-circle-outline" size={24} color="black" />
                }
                color="#FFFFFF"
                size="lg"
              />
              <Text color="#FFFFFF" fontSize={12}>
                Profile
              </Text>
            </Center>
          </Pressable>

          <Pressable
            // cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => {
                navigation.navigate(Commercial);
              }}>
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? 'home' : 'home-outline'}
                  />
                }
                color="#FFFFFF"
                size="lg"
              />
              <Text color="#FFFFFF" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>

          <Pressable
            // cursor="pointer"
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => {
                navigation.navigate(LandingPage);
              }}
          >
            <Center>
              <Icon
                mb={1}
                as={
                 <Entypo name="log-out" size={24} color="black" />
                }
                color="#FFFFFF"
                size="md"
              />
              <Text color="#FFFFFF" fontSize="12">
                Log Out
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
    
  );
}