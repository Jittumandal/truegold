import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from './screenNames';
import {
  OnboardingScreen,
  LoginScreen,
  OTPScreen,
  QuestionsScreen,
  WelcomeScreen,
  BiometricScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.ONBOARDING}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.ONBOARDING} component={OnboardingScreen} />
      <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
      <Stack.Screen name={SCREENS.OTP} component={OTPScreen} />
      <Stack.Screen name={SCREENS.QUESTIONS} component={QuestionsScreen} />
      <Stack.Screen name={SCREENS.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={SCREENS.BIOMETRIC} component={BiometricScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
