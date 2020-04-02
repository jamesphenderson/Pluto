import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const HomeHeaderBar = ({name, size, color, badgeCount}) => {
  if (!badgeCount || badgeCount < 1)
    return <Icon name={name} size={size} color={color} />;
  return (
    <View style={{width: 24, height: 24, margin: 5}}>
      <Icon name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View style={styles.container}>
          <Text style={styles.badgeText}>
            {badgeCount > 9 ? '10+' : badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 16,
    height: 16,
    borderRadius: 8,
    top: -3,
    right: -13,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
