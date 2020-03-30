import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Profile} from './../../../../screens/AppScreens';

const ProfileStack = createStackNavigator();
export const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};
