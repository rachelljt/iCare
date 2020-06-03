import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { RECIPES } from "../data/dummy-data";
import Colors from "../constants/colors";

const RecipeScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: "RecipeDetailsPage",
            params: {
              id: itemData.item.title,
            },
          });
        }}
      >
        <View style={styles.myText}>
          <Text style={styles.textItem}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => item.title}
        data={RECIPES}
        renderItem={renderGridItem}
      />
    </View>
  );
};

RecipeScreen.navigationOptions = {
  headerTitle: "Recipes",
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 100,
    backgroundColor: Colors.primary,
    justifyContent: "center",
  },
  textItem: {
    textAlign: "center",
    fontSize: 20,
  },
  myText: {
    justifyContent: "center",
  },
});

export default RecipeScreen;
