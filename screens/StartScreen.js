import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const StartScreen = (props) => {
  return (
    <View>
      <ImageBackground
        style={styles.background}
        source={require("../assets/dummyBackground.png")}
      >
        <View style={styles.container}>
          <Image
            style={styles.appLogo}
            source={require("../assets/dummyImage.png")}
          />
          <View style={styles.overallButtonContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  props.navigation.navigate({
                    routeName: "PushNotificationPage",
                  });
                }}
              >
                <Image
                  style={styles.icon}
                  source={require("../assets/dummyImage.png")}
                />
                <Text style={styles.text}>NOTIFICATIONS</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  props.navigation.navigate({
                    routeName: "EyeExercisePage",
                  });
                }}
              >
                <Image
                  style={styles.icon}
                  source={require("../assets/dummyImage.png")}
                />
                <Text style={styles.text}>EYE EXERCISES</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Image
                  style={styles.icon}
                  source={require("../assets/dummyImage.png")}
                />
                <Text style={styles.text}>FEATURE3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Image
                  style={styles.icon}
                  source={require("../assets/dummyImage.png")}
                />
                <Text style={styles.text}>FEATURE4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 900,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
  },
  appLogo: {
    height: 250,
    width: 250,
  },
  icon: {
    height: "80%",
    width: 60,
    marginVertical: 10,
    resizeMode: "stretch",
  },
  overallButtonContainer: {
    justifyContent: "space-evenly",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
    marginVertical: 35,
  },
  button: {
    alignItems: "center",
    height: 60,
  },
  text: {
    fontSize: 18,
  },
});

export default StartScreen;
