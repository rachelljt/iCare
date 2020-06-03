import React, { useState } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const PushNotificationScreen = (props) => {
  const [state, setState] = useState(1);
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Choose your notification time in hours.
      </Text>
      <Picker
        style={styles.picker}
        selectedValue={state}
        onValueChange={(hours) => setState({ hours })}
      >
        <Picker.Item label="1" value={1} />
        <Picker.Item label="2" value={2} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="4" value={4} />
        <Picker.Item label="5" value={5} />
      </Picker>
    </View>
  );
};

PushNotificationScreen.navigationOptions = {
  headerTitle: "Push Notifications",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  picker: {
    width: 100,
  },
});

export default PushNotificationScreen;
