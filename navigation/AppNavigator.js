import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import StartScreen from "../screens/StartScreen";
import PushNotificationScreen from "../screens/PushNotificationScreen";
import OtherScreen from "../screens/OtherScreen";

const AppNavigator = createStackNavigator({
  StartPage: StartScreen,
  PushNotificationPage: PushNotificationScreen,
  OtherPage: OtherScreen,
});

export default createAppContainer(AppNavigator);
