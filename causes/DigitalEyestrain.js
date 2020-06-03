import React, { useState } from "react";
import {
  ScrollView,
  View,
  Modal,
  StyleSheet,
  Button,
  Text,
} from "react-native";

import Header from "../components/Header";
import Colors from "../constants/colors";

const DigitalEyestrain = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <ScrollView>
          <Header
            title="Causes and Quick Prevention Tips to Digital Eyestrain"
            style={styles.header}
            headerTitle={styles.headerTitle}
          />

          <View style={styles.mainTextContainer}>
            <View style={styles.textContainer}>
              <View style={styles.causeContainer}>
                <Text style={styles.text}>
                  Holding a digital device too far or too close to your eyes.
                </Text>
              </View>
              <View style={styles.tipContainer}>
                <Text style={styles.text}>
                  QUICK TIP: The (20-20-20-20) Rule{" "}
                </Text>
                <Text style={styles.text}>
                  - Keep your eyes at least 20 INCHES from your screen and take
                  a 20 SECOND break every 20 MINUTES to look at something at
                  least 20 FEET away.
                </Text>
              </View>
            </View>

            <View style={styles.textContainer}>
              <View style={styles.causeContainer}>
                <Text style={styles.text}>
                  Maintaining poor posture when viewing a digital device.
                </Text>
              </View>
              <View style={styles.tipContainer}>
                <Text style={styles.text}>QUICK TIPS:</Text>
                <Text style={styles.text}>
                  - Avoid "turtling" - sitting with your back rounded, chin
                  jutting forward and head titled back - to get closer to your
                  screen. If you can't see your screen clearly with good
                  posture, visit an eye doctor.
                </Text>
                <Text style={styles.text}>
                  - Your back should be supported so you can sit upright and at
                  a comfortable viewing distance from your screen.
                </Text>
                <Text style={styles.text}>
                  - Place your mouse at a suitable distance away from your body
                  as having your mouse too far away will make your lean closer
                  to your screen, increasing focusing strain.
                </Text>
              </View>
            </View>

            <View style={styles.textContainer}>
              <View style={styles.causeContainer}>
                <Text style={styles.text}>
                  Failing to blink as often as normal. Intense focus,
                  particularly when viewing a screen, can result in a dramatic
                  reduction in how many times you blink per minute. When you
                  blink less, your eyes can get dry and irritated.
                </Text>
              </View>
              <View style={styles.tipContainer}>
                <Text style={styles.text}>
                  QUICK TIP: Use eye drops. You can also try to blink more often
                  when using a screen, which can prevent the symptom from
                  occurring.
                </Text>
              </View>
            </View>

            <View style={styles.textContainer}>
              <View style={styles.causeContainer}>
                <Text style={styles.text}>
                  Old monitors and low-resolution screens are hard on the eyes.
                </Text>
              </View>
              <View style={styles.tipContainer}>
                <Text style={styles.text}>
                  QUICK TIP: Upgrade to a high-resolution flat panel display for
                  less yee fatigue.
                </Text>
              </View>
            </View>

            <View style={styles.textContainer}>
              <View style={styles.causeContainer}>
                <Text style={styles.text}>
                  Being exposed to extended amounts of blue light, which is the
                  light commonly emitted from digital devices.
                </Text>
              </View>
              <View style={styles.tipContainer}>
                <Text style={styles.text}>QUICK TIP:</Text>
                <Text style={styles.text}>
                  - Take a break from your digital devices every 20 minutes.
                  Shift your focus to other activities that does not involve
                  your digital devices.
                </Text>
                <Text style={styles.text}>
                  - Wear special computer glasses that helps to reduce the
                  amount of blue light that reaches your bare eyes.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <Button
          style={styles.button}
          title="CLOSE"
          onPress={() => props.close(!props.visible)}
        />
      </View>
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
    marginBottom: 10,
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
  textContainer: {
    marginVertical: 10,
  },
  causeContainer: {
    backgroundColor: Colors.causesColor,
    borderRadius: 15,
    marginBottom: 10,
  },
  tipContainer: {
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

export default DigitalEyestrain;
