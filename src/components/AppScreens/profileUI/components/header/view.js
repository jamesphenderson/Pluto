import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AvatarView} from './avatar';
import {FollowingView} from './following';
import {FollowerView} from './followers';
import {ProfileMetadata} from './metadata';

export default () => (
  <View style={styles.container}>
    <View style={styles.headerCard}>
      <FollowerView />
      <AvatarView />
      <FollowingView />
    </View>
    <ProfileMetadata />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});
