import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default () => (
  <Text style={styles.bio}>
    Some short biography that does not exceed a certain character limit due to
    aesthetic and bandwidth limitations.
  </Text>
);

const styles = StyleSheet.create({
  bio: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 14,
    color: '#2f2e41',
  },
});
