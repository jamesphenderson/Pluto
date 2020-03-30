import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from './../../../../screens/AppScreens';
import {HomeHeaderOptions} from './../../../options';

const HomeStack = createStackNavigator();
export const HomeStackScreen = () => {
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
