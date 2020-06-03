import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import InadequateLighting from "../causes/InadequateLighting";
import OldPrescription from "../causes/OldPrescription";
import DigitalEyestrain from "../causes/DigitalEyestrain";
import ExtendedTime from "../causes/ExtendedTime";
import Colors from "../constants/colors";

const CausesScreen = (props) => {
  const [digitalEyestrainMode, setDigitalEyestrainMode] = useState(false);
  const [extendedTimeMode, setExtendedTimeMode] = useState(false);
  const [inadequateLightingMode, setInadequateLightingMode] = useState(false);
  const [oldPrescriptionMode, setOldPrescriptionMode] = useState(false);

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setDigitalEyestrainMode(!digitalEyestrainMode)}
          >
            <Text style={styles.text}>Digital Eyestrain</Text>

            <DigitalEyestrain
              visible={digitalEyestrainMode}
              close={setDigitalEyestrainMode}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setExtendedTimeMode(!extendedTimeMode)}
          >
            <Text style={styles.text}>
              Focusing on a Single Task for an Extended Period of Time
            </Text>

            <ExtendedTime
              visible={extendedTimeMode}
              close={setExtendedTimeMode}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setInadequateLightingMode(!inadequateLightingMode)}
          >
            <Text style={styles.text}>Inadequate Lighting</Text>

            <InadequateLighting
              visible={inadequateLightingMode}
              close={setInadequateLightingMode}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setOldPrescriptionMode(!oldPrescriptionMode)}
          >
            <Text style={styles.text}>Old Prescription</Text>

            <OldPrescription
              visible={oldPrescriptionMode}
              close={setOldPrescriptionMode}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

CausesScreen.navigationOptions = {
  headerTitle: "Causes & QuickTips",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    fontSize: 26,
    textAlign: "center",
  },
  screen: {
    flex: 1,
    backgroundColor: "#AECFDF",
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
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 60,
  },
});

export default CausesScreen;
