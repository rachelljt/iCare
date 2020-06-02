import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import StartScreen from "../screens/StartScreen";
import PushNotificationScreen from "../screens/PushNotificationScreen";
import EyeExerciseScreen from "../screens/EyeExerciseScreen";

const AppNavigator = createStackNavigator({
  StartPage: StartScreen,
  PushNotificationPage: PushNotificationScreen,
  EyeExercisePage: EyeExerciseScreen,
});

export default createAppContainer(AppNavigator);
