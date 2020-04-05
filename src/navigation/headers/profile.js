import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ProfileHeaderBar = ({name, size, color, badgeCount}) => {
  return (
    <View style={{width:30, height: 30, margin: 5,}}>
      <Icon name={name} size={size} color={color} />
      {badgeCount && (
        <View style={styles.containerDot}>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerDot: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    position: 'absolute',
    borderRadius: 5,
    height: 10,
    width: 10,
    right: -6,
    top: 0
  },
  badgeText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 10,
  },
});
