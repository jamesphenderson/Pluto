import React from 'react';
import {HomeHeaderBar} from './../headers';

export const HomeHeaderOptions = {
  title: 'Home',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  headerTitleAlign: 'center',
  headerLeftContainerStyle: {
    paddingLeft: 15,
  },
  headerRightContainerStyle: {
    paddingRight: 15,
  },
  headerLeft: props => (
    <HomeHeaderBar
      {...props}
      name={'bell-ring-outline'}
      size={30}
      color={'#333'}
      badgeCount={25}
    />
  ),
  headerRight: props => (
    <HomeHeaderBar
      {...props}
      name={'heart-multiple-outline'}
      size={30}
      color={'#333'}
    />
  ),
  headerTransparent: true,
};
