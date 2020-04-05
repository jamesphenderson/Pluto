import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {AvatarView} from './avatar';
import {Button} from 'native-base';

export default () => (
  <View style={styles.container}>
    <View style={styles.headerCard}>
      <View style={styles.followersCard}>
        <Text style={styles.followerFigure}>27.6K</Text>
        <Text style={styles.followerText}>Followers</Text>
      </View>
      <AvatarView />
      <View style={styles.followingCard}>
        <Text style={styles.followingFigure}>2,304</Text>
        <Text style={styles.followingText}>Following</Text>
      </View>
    </View>
    <View style={styles.metadata}>
      <Text style={styles.displayName}>Brian Njogu</Text>
      <Text style={styles.bio}>
        Some short biography that does not exceed a certain character limit due
        to aesthetic and bandwidth limitations.
      </Text>
    </View>
    <Button style={styles.editProfileBtn} block>
      <Text style={styles.editProfileBtnText}>Edit my profile</Text>
    </Button>
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
  },
  followersCard: {
    alignItems: 'center',
  },
  followingCard: {
    alignItems: 'center',
  },
  followerFigure: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#2f2e41',
    paddingBottom: 2,
  },
  followerText: {},
  followingFigure: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#2f2e41',
    paddingBottom: 2,
  },
  followingText: {},
  metadata: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayName: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#222',
  },
  bio: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 14,
    color: '#2f2e41',
  },
  editProfileBtn: {
    backgroundColor: '#940a37',
    marginTop: 10,
  },
  editProfileBtnText: {
    fontSize: 15,
    color: '#fff',
  },
});
