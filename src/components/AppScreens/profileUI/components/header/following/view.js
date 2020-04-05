import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default () => (
  <View style={styles.followingCard}>
    <Text style={styles.followingFigure}>3,609</Text>
    <Text style={styles.followingText}>Following</Text>
  </View>
);

const styles = StyleSheet.create({
  followingCard: {
    alignItems: 'center',
  },
  followingFigure: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#2f2e41',
    paddingBottom: 2,
    color: '#801336',
  },
  followingText: {
    fontWeight: 'bold',
  },
});
