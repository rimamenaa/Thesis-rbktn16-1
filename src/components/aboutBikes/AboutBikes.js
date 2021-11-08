import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  View,
  AspectRatio,
  Image,
  Stack,
  Text,
  Card,
  ScrollView,
  Button,
  Pressable,
  Box,
  HStack,
  Spacer,
  Flex,
  Center,
  NativeBaseProvider,
} from "native-base";


import Footer from "../Footer/Footer";
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";


function AboutBikes() {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(async () => {
    axios
      .get("https://bycyclebackend.herokuapp.com/bicycle")
      .then((response) => {
        console.log('dataaaa', response.data.slice(7,14));
        setData(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);


  return (
//     <View>
//     <ScrollView marginBottom="20">   
//       {data.map((bike, key) => {
//         console.log(bike);
//         return (
//           <Card key={key}>
//             <Text fontSize="2xl">{bike.category}</Text>
//             <AspectRatio ratio={9 / 9}>
//               <Image
//                 marginTop="1"
//                 rounded="lg"
//                 height="100%"
//                 width="100%"
//                 source={{ uri: bike.photo }}
//                 alt={"Loading..."}
//               />
//             </AspectRatio>
//             <Stack>
//               <Text fontSize="md" fontWeight="500" ml="-0.5" mt="-1" p="4">
//                 {bike.description}
//               </Text>
//             </Stack>
//             <Button
//                 size="lg"
//                 variant="outline"
//                 colorScheme="amber"
//                 width="100%"
//                 height="16"
//                 onPress={() => {
//                   navigation.navigate("Rent");
//                 }}
//               >
//  <FontAwesome name="arrow-circle-right" size={35} color="black" /> 
//              </Button>
//           </Card>
//         );
//       })}
//     </ScrollView>
       
//     <View style={{position: 'absolute', width: "100%", marginTop:655, backgroundColor:"white"}}>
//         <Footer navigation={navigation} />
//       </View>
//       </View>
<View alignItems="center">

<Pressable
onPress={() => {
  navigation.navigate("AdultBikes");
}}
> 
{/* <AspectRatio ratio={1.08} height={250} width={200}>
                  <Image
                   rounded="sm"
                    source={require("../../../assets/adult.jpg")}
                    alt="image"
                    // marginTop="8"
                  />
                </AspectRatio> */}
                 <Card>
            <AspectRatio ratio={9 / 9}>
              <Image
                marginTop="1"
                rounded="lg"
                height="100%"
                width="100%"
                source={require("../../../assets/adult.jpg")}
                alt={"image..."}
              />
            </AspectRatio>
            <Stack>
              <Text fontSize="md" fontWeight="500" ml="-0.5" mt="-1" p="4">
                Bicycles For Adults
              </Text>
            </Stack>
        
          </Card>

</Pressable>

<Pressable
onPress={() => {
  navigation.navigate("KidBikes");
}}
> 
{/* <AspectRatio ratio={1.15} height={250} width={200}>
                  <Image
                   rounded="sm"
                   source={require("../../../assets/kid.jpg")}
                    alt="image"
                    // marginTop="8"

                  />
                </AspectRatio> */}
                   <Card>
            <AspectRatio ratio={9 / 9}>
              <Image
                marginTop="1"
                rounded="lg"
                height="100%"
                width="100%"
                source={require("../../../assets/kid.jpg")}
                alt={"image..."}
              />
            </AspectRatio>
            <Stack>
              <Text fontSize="md" fontWeight="500" ml="-0.5" mt="-1" p="4">
                Bicycles For Kids
              </Text>
            </Stack>
        
          </Card>
</Pressable>
</View>

  );
}

export default AboutBikes;
