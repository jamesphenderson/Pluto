import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screen stacks
import {AuthStackScreens} from './Auth';
import {
  HomeStackScreen,
  CreatePostStackScreen,
  ProfileStackScreen,
} from './App';

//preconfigured tabs
import {BottomTabScreenOptions, BottomTabTabOptions} from './../options';

const AppStack = createBottomTabNavigator();
const AppStackScreens = () => {
  return (
    <AppStack.Navigator
      screenOptions={BottomTabScreenOptions}
      tabBarOptions={BottomTabTabOptions}>
      <AppStack.Screen name="Home" component={HomeStackScreen} />
      <AppStack.Screen name="CreatePost" component={CreatePostStackScreen} />
      <AppStack.Screen name="Profile" component={ProfileStackScreen} />
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
