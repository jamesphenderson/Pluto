import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const BottomTabScreenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = focused ? 'fire' : 'fire';
    } else if (route.name === 'Profile') {
      iconName = focused ? 'face' : 'face';
    }
    return <Icon name={iconName} size={size} color={color} />;
  },
});

export const BottomTabTabOptions = {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
};
