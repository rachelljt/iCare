import React from "react";
import { Modal, View, Button, StyleSheet, Text } from "react-native";

import Header from "../components/Header";
import Colors from "../constants/colors";

const InadequateLighting = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <Header
          title="Inadequately Lit Environment"
          style={styles.header}
          headerTitle={styles.headerTitle}
        />
        <View style={styles.mainTextContainer}>
          <View style={styles.causeContainer}>
            <Text style={styles.text}>
              Lighting can cause eyestrain. It can either be too dim or too
              bright, depending on the activity.
            </Text>
          </View>
          <View style={styles.tipsContainer}>
            <Text style={styles.text}>Quick Tip:</Text>
            <Text style={styles.text}>
              - Light should come from behind you if you’re focusing intensely
              on something like reading.
            </Text>
            <Text style={styles.text}>
              - Dimming the lights may help reduce eyestrain when watching TV
            </Text>
            <Text style={styles.test}>
              - When using the computer, overhead lighting should be no brighter
              than your screen.
            </Text>
            <Text style={styles.text}>
              - Make sure the screens that you’re viewing are adequately lit as
              well. Adjust the brightness as needed.
            </Text>
            <Text style={styles.text}>
              - Glare can contribute to eyestrain. Try shading windows or using
              filters to reduce glare on your digital device.
            </Text>
          </View>
        </View>
      </View>
      <Button
        style={styles.button}
        title="CLOSE"
        onPress={() => props.close(!props.visible)}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    height: 80,
    backgroundColor: Colors.causesHeader,
    marginBottom: 40,
  },
  headerTitle: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginVertical: 15,
  },
  mainTextContainer: {
    justifyContent: "space-evenly",
  },
  causeContainer: {
    backgroundColor: Colors.causesColor,
    borderRadius: 12,
    marginBottom: 10,
  },
  tipsContainer: {
    backgroundColor: Colors.tipsColor,
    borderRadius: 15,
  },
  button: {
    height: 100,
    width: 100,
    padding: 10,
  },
  text: {
    textAlign: "center",
  },
});

export default InadequateLighting;
