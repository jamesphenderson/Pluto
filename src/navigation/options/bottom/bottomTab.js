import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const BottomTabScreenOptions = ({route}) => ({
  tabBarIcon: ({focused, color}) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home';
    } else if (route.name === 'CreatePost') {
      iconName = focused ? 'bullhorn' : 'bullhorn';
    } else if (route.name === 'Profile') {
      iconName = focused ? 'face' : 'face';
    }
    return <Icon name={iconName} size={35} color={color} />;
  },
});

export const BottomTabTabOptions = {
  activeTintColor: 'red',
  inactiveTintColor: '#000',
  showLabel: false,
};
