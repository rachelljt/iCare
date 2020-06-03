import React from "react";
import { StyleSheet, ScrollView, Image, Text } from "react-native";

import { RECIPES } from "../data/dummy-data";
import Colors from "../constants/colors";

const RecipeDetailsScreen = (props) => {
  const ID = props.navigation.getParam("id");
  const selectedRecipe = RECIPES.find((recipe) => recipe.title === ID);

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: selectedRecipe.imageURL }} style={styles.image} />
      <Text style={styles.textTitle}>Ingredients</Text>
      {selectedRecipe.ingredients.map((ingredient) => (
        <Text key={ingredient} style={styles.textDetails}>
          {ingredient}
        </Text>
      ))}
      <Text style={styles.textTitle}>Steps</Text>
      {selectedRecipe.steps.map((step) => (
        <Text key={step} style={styles.textDetails}>
          {step}
        </Text>
      ))}
    </ScrollView>
  );
};

RecipeDetailsScreen.navigationOptions = {
  headerTitle: "Details",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    margin: 5,
  },
  container: {
    margin: 15,
    height: "80%",
    backgroundColor: Colors.accent,
  },
  image: {
    height: 200,
    width: "100%",
  },
  textTitle: {
    fontSize: 22,
    textAlign: "center",
    backgroundColor: Colors.accent,
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  textDetails: {
    fontSize: 18,
  },
});

export default RecipeDetailsScreen;
