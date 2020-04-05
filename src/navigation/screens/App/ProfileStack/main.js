import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Profile} from './../../../../screens/AppScreens'
import {ProfileHeaderOptions} from './../../../options';

const ProfileStack = createStackNavigator();
export const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} options={ProfileHeaderOptions} />
    </ProfileStack.Navigator>
  );
};
