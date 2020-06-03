import React from "react";
import { Modal, View, Button, StyleSheet, Text } from "react-native";

import Header from "../components/Header";
import Colors from "../constants/colors";

const OldPrescription = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <Header
          title="Old Prescription"
          style={styles.header}
          headerTitle={styles.headerTitle}
        />
        <View style={styles.mainTextContainer}>
          <View style={styles.causeContainer}>
            <Text style={styles.text}>
              People squint in order to better focus their eyes and reduce the
              amount of light entering them. Unless it is unusually bright, you
              shouldn't need to squint if your glasses are working correctly.
              Squinting could be a sign that you need a new prescription.
              Out-of-date prescription may cause eye strain, which can lead to
              headaches.{" "}
            </Text>
          </View>
          <View style={styles.tipsContainer}>
            <Text style={styles.text}>QUICK TIP:</Text>
            <Text style={styles.text}>
              Get an eye examination. Work with your doctor to determine if you
              need special eyewear to reduce eyestrain. You may even need
              specialized lenses, devices, or eye therapy for the activity that
              causes strain. Certain coatings and tints for lenses may help your
              eyes. Or you may find that you need to cut the time you wear
              contact lenses to help rest your eyes.
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

export default OldPrescription;
