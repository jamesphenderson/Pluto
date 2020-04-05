import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default () => <Text style={styles.displayName}>Brian Njogu</Text>;

const styles = StyleSheet.create({
  displayName: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#222',
  },
});
