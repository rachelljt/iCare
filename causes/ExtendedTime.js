import React from "react";
import { Modal, View, Button, StyleSheet, Text } from "react-native";

import Header from "../components/Header";
import Colors from "../constants/colors";

const ExtendedTime = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <Header
          title="Focusing on a Single Task for a Long Length of Time"
          style={styles.header}
          headerTitle={styles.headerTitle}
        />
        <View style={styles.mainTextContainer}>
          <View style={styles.causeContainer}>
            <Text style={styles.text}>
              Often eyestrain occurs when you engage in a single activity for
              too long a period of time without a break.
            </Text>
          </View>
          <View style={styles.tipsContainer}>
            <Text style={styles.text}>QUICK TIP: The (20-20-20) Rule</Text>
            <Text style={styles.text}>
              - You should shift your focus to something other than the activity
              every 20 MINUTES. What you focus on should be 20 FEET away, and
              you should look at it for at least 20 SECONDS.
            </Text>
            <Text style={styles.text}>
              - You should not only look away every 20 minutes, but also make
              sure to turn away from an intense activity for several hours
              during the day.
            </Text>
            <Text style={styles.text}>
              - If you have to work at a screen or drive a long distance for
              multiple hours, make sure to balance that activity with others
              that demand different uses of your eyes.
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
    borderRadius: 15,
    marginBottom: 10,
  },
  tipsContainer: {
    backgroundColor: Colors.tipsColor,
    borderRadius: 15,
  },
  text: {
    textAlign: "center",
  },
  button: {
    height: 100,
    width: 100,
    padding: 10,
  },
});

export default ExtendedTime;
