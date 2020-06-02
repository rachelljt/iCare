import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <View style={{ ...styles.header, ...props.style }}>
      <Text style={props.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "80%",
    backgroundColor: Colors.primary,
    margin: 40,
  },
});

export default Header;
