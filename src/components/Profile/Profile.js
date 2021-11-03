import React, { Component } from "react";
import { Container, container, View } from "native-base";
import { Image } from "native-native";
import { Text } from "react-native-elements";

class Profile extends Component {
  static navigationOptions = {
    headerTitle: "Profile",
  };
  render() {
    const imagePlaceholder = "https://via.placeholder.com/150";
    return (
      <Container style={{ flex: 1 }}>
        <Image
          source={{ uri: imagePlaceholder }}
          style={{
            alignSelf: "center",
            borderRadius: 100,
            width: 125,
            height: 125,
            marginBottom: 20,
            marginTop: 30,
          }}
        />
        <View
          style={{
            flex: 1,
            marginHorizontal: 30,
            width: "80%",
            alignContent: "flex-start",
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <Text>Name: </Text>
            <Text style={{ alignSelf: "flex-start" }}>Name</Text>
          </View>
          <View>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <Text>Email: </Text>
              <Text style={{ alignSelf: "flex-start" }}>Email</Text>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

export default Profile;
