import React from "react";
import {
  View,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import Colors from "../constants/colors";

const UsefulLinksScreen = (props) => {
  return (
    <View>
      <ImageBackground
        style={styles.background}
        source={require("../assets/question.png")}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL("https://www.snec.com.sg/")}
          >
            <Text style={styles.text}>Singapore National Eye Centre</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL(
                "https://www.moh.gov.sg/cost-financing/fee-benchmarks-and-bill-amount-information/BodyPartsSearch"
              )
            }
          >
            <Text style={styles.text}>Ministry Of Health, Singapore - </Text>
            <Text style={styles.text}>Eye Related Operations</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL(
                "https://www.doctorxdentist.com/eye-specialist-singapore"
              )
            }
          >
            <Text style={styles.text}>
              Guide To Seeing An Eye Specialist In Singapore
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL("https://www.youtube.com/watch?v=LRgmxRKWt3A")
            }
          >
            <Text style={styles.text}>
              Simple Eye Exercisese Video To Follow Along With
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

UsefulLinksScreen.navigationOptions = {
  headerTitle: "Useful Links",
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 26,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 150,
    width: 300,
    margin: 10,
    backgroundColor: "#88CCF1",
    justifyContent: "center",
    borderRadius: 60,
  },
});

export default UsefulLinksScreen;
