import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Onboarding,
  Login,
  Signup,
  ForgotPassword,
} from './../../../screens/AuthScreens';

const AuthStack = createStackNavigator();
export const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator initialRouteName="Onboarding">
      <AuthStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
