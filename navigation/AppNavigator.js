import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import StartScreen from "../screens/StartScreen";
import PushNotificationScreen from "../screens/PushNotificationScreen";
import EyeExerciseScreen from "../screens/EyeExerciseScreen";
import RecipeScreen from "../screens/RecipeScreen";
import CausesAndPreventionScreen from "../screens/CausesAndPreventionScreen";
import CausesScreen from "../screens/CausesScreen";
import UsefulLinksScreen from "../screens/UsefulLinksScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";

const AppNavigator = createStackNavigator({
  StartPage: StartScreen,
  PushNotificationPage: PushNotificationScreen,
  EyeExercisePage: EyeExerciseScreen,
  RecipePage: RecipeScreen,
  CausesAndPreventionPage: CausesAndPreventionScreen,
  CausesPage: CausesScreen,
  UsefulLinksPage: UsefulLinksScreen,
  RecipeDetailsPage: RecipeDetailsScreen,
});

export default createAppContainer(AppNavigator);
