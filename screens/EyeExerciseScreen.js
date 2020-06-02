import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";

import Header from "../components/Header";

const EyeExerciseScreen = (props) => {
  return (
    <View>
      <ScrollView>
        <Header
          title="RELAX and REFRESH your eyes with 9 simple steps!"
          style={styles.header}
          headerTitle={styles.headerTitle}
        />
        <View style={styles.container}>
          <Text>1</Text>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise1.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Look up, hold 5 seconds, relax your eyes
              </Text>
              <Text style={styles.text}>
                Look down, hold 5 seconds, relax your eyes
              </Text>
              <Text style={styles.text}>Repeat 5 times</Text>
              <Text style={styles.text}>Blink your eyes for a few seconds</Text>
            </View>
          </View>
          <Text>2</Text>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise2.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Look left, hold 5 seconds, relax your eyes
              </Text>
              <Text style={styles.text}>
                Look right, hold 5 seconds, relax your eyes
              </Text>
              <Text style={styles.text}>Repeat 5 times</Text>
              <Text style={styles.text}>Blink your eyes</Text>
            </View>
          </View>
          <Text>3</Text>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise3.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Look up left, hold 5 seconds, relax your eyes
              </Text>
              <Text style={styles.text}>
                Look down right, hold 5 seconds, relax your eyes
              </Text>
              <Text style={styles.text}>Repeat 5 times</Text>
              <Text style={styles.text}>Blink your eyes</Text>
            </View>
          </View>
          <Text>4</Text>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise4.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Look up right, hold 5 seconds, relax your eyes
              </Text>
              <Text style={styles.text}>
                Look down left, hold 5 seconds, relax your eyes
              </Text>
              <Text style={styles.text}>Repeat 5 times</Text>
              <Text style={styles.text}>Blink your eyes</Text>
            </View>
          </View>
          <Text>5</Text>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise5.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Rotate your eyeballs for 10 rounds to the left
              </Text>
              <Text style={styles.text}>Blink your eyes</Text>
            </View>
          </View>
          <Text>6</Text>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise6.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Rotate your eyeballs for 10 rounds to the right
              </Text>
              <Text style={styles.text}>Blink your eyes</Text>
            </View>
          </View>
          <Text>7</Text>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise7.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Cross your eyes by looking at the tip of your nose
              </Text>
              <Text style={styles.text}>
                Look up at your eyebrows and then back to the tip of your nose
              </Text>
              <Text style={styles.text}>Relax your eyes</Text>
              <Text style={styles.text}>Repeat 5 times</Text>
              <Text style={styles.text}>Blink your eyes</Text>
            </View>
          </View>
          <Text>8</Text>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise8.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Close your eyes as tightly as possible
              </Text>
              <Text style={styles.text}>Hold for 5 seconds, then relax</Text>
            </View>
          </View>
          <Text>9</Text>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise9.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Open your eyes wide open</Text>
              <Text style={styles.text}>Hold for 5 seconds, then relax</Text>
              <Text style={styles.text}>Repeat 10 times</Text>
              <Text style={styles.text}>Blink your eyes</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
  },
  headerTitle: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginVertical: 15,
  },
  container: {},
  imageTextContainer: {
    flexDirection: "row",
    marginVertical: 15,
  },
  image: {},
  text: {
    textAlign: "center",
  },
});

export default EyeExerciseScreen;
