import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CreatePost} from './../../../../screens/AppScreens';
import {CreatePostHeaderOptions} from './../../../options/';

const CreatePostStack = createStackNavigator();
export const CreatePostStackScreen = () => {
  return (
    <CreatePostStack.Navigator>
      <CreatePostStack.Screen
        name="CreatePost"
        component={CreatePost}
        options={CreatePostHeaderOptions}
      />
    </CreatePostStack.Navigator>
  );
};
