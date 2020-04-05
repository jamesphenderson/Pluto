import React from 'react';
import {ProfileHeaderBar} from './../headers';

export const ProfileHeaderOptions = {
  title: 'Profile',
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
    <ProfileHeaderBar
      {...props}
      name={'account-multiple-outline'}
      size={31}
      color={'#333'}
      badgeCount={true}
    />
  ),
  headerRight: props => (
    <ProfileHeaderBar
      {...props}
      name={'settings-outline'}
      size={29}
      color={'#333'}
    />
  ),
  headerTransparent: true,
};
