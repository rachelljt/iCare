import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import AppNavigator from "./navigation/AppNavigator";
import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/dummyBackground.png")}
      style={styles.imageBackground}
    >
      <View style={styles.screen}>
        <Header title="appName" />
        <StartScreen />
        <AppNavigator />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
      flex: 1, 
      width: "100%",
      height: "100%"
  },
  screen: {
    flex: 1,
  },
});
