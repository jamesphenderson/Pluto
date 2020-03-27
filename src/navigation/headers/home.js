import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const hasCountOverflown = count => (count > 99 ? true : false);

export const HomeHeaderBar = ({name, size, color, badgeCount}) => {
  if (!badgeCount || badgeCount < 1)
    return <Icon name={name} size={size} color={color} />;
  return (
    <View style={{width: 24, height: 24, margin: 5}}>
      <Icon name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            ...styles.container,
            right: hasCountOverflown(badgeCount) ? -13 : -6,
            borderRadius: hasCountOverflown(badgeCount) ? 10 : 7.3,
            width: hasCountOverflown(badgeCount) ? 20 : 14.6,
            height: hasCountOverflown(badgeCount) ? 20 : 14.6,
          }}>
          <Text style={styles.badgeText}>
            {hasCountOverflown(badgeCount) ? '99+' : badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -3,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
