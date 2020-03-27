import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screens
import {
  Onboarding,
  Login,
  Signup,
  ForgotPassword,
} from './../screens/AuthScreens';
import {Home, Settings} from './../screens/AppScreens';

//preconfigured tabs
import {
  HomeHeaderOptions,
  BottomTabScreenOptions,
  BottomTabTabOptions,
} from './options';

const AuthStack = createStackNavigator();
const AuthStackScreens = () => {
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

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={HomeHeaderOptions}
      />
      {/* Add more to stack screens within Home */}
    </HomeStack.Navigator>
  );
};

const SettingsStack = createStackNavigator();
const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );
};

const AppStack = createBottomTabNavigator();
const AppStackScreens = () => {
  return (
    <AppStack.Navigator
      screenOptions={BottomTabScreenOptions}
      tabBarOptions={BottomTabTabOptions}>
      <AppStack.Screen name="Home" component={HomeStackScreen} />
      <AppStack.Screen name="Settings" component={SettingsStackScreen} />
    </AppStack.Navigator>
  );
};

export const MainAppNavigation = isAuthenticated => {
  return (
    <NavigationContainer>
      {isAuthenticated ? AppStackScreens() : AuthStackScreens()}
    </NavigationContainer>
  );
};
