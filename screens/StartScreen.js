import React from "react";
import { View, Button, StyleSheet } from "react-native";

import Header from "../components/Header";

const StartScreen = (props) => {
  return (
    // <Image
    //   source={require("./assets/dummyBackground.png")}
    //   style={styles.imageBackground}
    // >
    <View>
      <Header style={styles.header} title="appName" />
      {/* <Image source={require("./assets/dummyImage.png")} style={styles.image} /> */}
      <View style={styles.button}>
        <Button
          title="NOTIFICATIONS"
          onPress={() => {
            props.navigation.navigate({ routeName: "PushNotificationPage" });
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="OTHERS"
          onPress={() => {
            props.navigation.navigate({ routeName: "OtherPage" });
          }}
        />
      </View>
    </View>
    // </Image>
  );
};

const styles = StyleSheet.create({
  //   imageBackground: {
  //     flex: 1,
  //     width: "100%",
  //     height: "100%",
  //   },
  header: {},
  //   image: {
  //     width: 30,
  //     height: 30,
  //   },
  button: {
    width: 100,
  },
});

export default StartScreen;
