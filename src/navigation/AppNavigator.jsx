import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../screens";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { SCREENS } from "./screenNames";

const RootStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={SCREENS.SPLASH}
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name={SCREENS.SPLASH} component={SplashScreen} />
        <RootStack.Screen name={SCREENS.AUTH} component={AuthStack} />
        <RootStack.Screen name={SCREENS.MAIN} component={MainStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
