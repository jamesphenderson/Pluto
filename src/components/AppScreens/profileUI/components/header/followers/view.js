import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default () => (
  <View style={styles.followersCard}>
    <Text style={styles.followerFigure}>27.6K</Text>
    <Text style={styles.followerText}>Followers</Text>
  </View>
);

const styles = StyleSheet.create({
  followersCard: {
    alignItems: 'center',
  },
  followerFigure: {
    fontWeight: 'bold',
    fontSize: 22,
    paddingBottom: 2,
    color: '#fb6251',
  },
  followerText: {
    fontWeight: 'bold',
    color: '#333',
  },
});
