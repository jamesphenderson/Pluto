import React from 'react';
import {CreatePostHeaderBar} from './../headers';

export const CreatePostHeaderOptions = {
  title: 'Share Post',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  headerTitleAlign: 'left',
  headerLeftContainerStyle: {
    paddingLeft: 15,
  },
  headerRightContainerStyle: {
    paddingRight: 15,
  },
  headerRight: props => (
    <CreatePostHeaderBar
      {...props}
      name={'alarm-light'}
      size={31}
      color={'#333'}
    />
  ),
  headerTransparent: true,
};
