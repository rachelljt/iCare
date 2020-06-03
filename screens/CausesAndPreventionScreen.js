import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/colors";

const CausesAndPreventionScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate({
              routeName: "CausesPage",
            });
          }}
        >
          <Text style={styles.text}>CAUSES & QUICK TIPS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linksButton}
          onPress={() => {
            props.navigation.navigate({
              routeName: "UsefulLinksPage",
            });
          }}
        >
          <Text style={styles.text}>USEFUL LINKS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

CausesAndPreventionScreen.navigationOptions = {
  headerTitle: "Causes/QuickTips/Links",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FAD8D6",
  },
  buttonContainer: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 150,
    width: 300,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 70,
  },
  linksButton: {
    height: 150,
    width: 300,
    marginTop: 80,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 70,
  },
  text: {
    textAlign: "center",

    fontSize: 25,
  },
});

export default CausesAndPreventionScreen;
