import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {CreatePost} from './../../../../screens/AppScreens';

const CreatePostStack = createStackNavigator();
export const CreatePostStackScreen = () => {
  return (
    <CreatePostStack.Navigator>
      <CreatePostStack.Screen name="CreatePost" component={CreatePost} />
    </CreatePostStack.Navigator>
  );
};
