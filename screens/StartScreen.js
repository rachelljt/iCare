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
        source={require("../assets/background3.png")}
      >
        <View style={styles.container}>
          <Image
            style={styles.appLogo}
            source={require("../assets/appLogo2.png")}
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
                  source={require("../assets/notification.png")}
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
                  source={require("../assets/eye.png")}
                />
                <Text style={styles.text}>EYE EXERCISES</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  props.navigation.navigate({ routeName: "RecipePage" });
                }}
              >
                <Image
                  style={styles.icon}
                  source={require("../assets/recipes.png")}
                />
                <Text style={styles.text}>RECIPES</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  props.navigation.navigate({
                    routeName: "CausesAndPreventionPage",
                  });
                }}
              >
                <Image
                  style={styles.icon}
                  source={require("../assets/bulb.png")}
                />
                <Text style={styles.text}>CAUSES & QUICK TIPS</Text>
                <Text style={styles.text}>USEFUL LINKS</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

StartScreen.navigationOptions = {
  headerTitle: "Home",
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "120%",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
  },
  appLogo: {
    resizeMode: "stretch",
    marginTop: 40,
  },
  icon: {
    height: "80%",
    width: 60,
    marginVertical: 10,
    resizeMode: "stretch",
  },
  overallButtonContainer: {
    justifyContent: "space-evenly",
    marginTop: 25,
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
    textAlign: "center",
  },
});

export default StartScreen;
