import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AnonymousPost from './post';
// import {fetchPosts} from './../../../../../../api';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Anonymous sounds</Text>
      <View style={styles.cardContainer}>
        <AnonymousPost reverseOrder={true} isPlaying={false} />
        <AnonymousPost reverseOrder={false} isPlaying={false} />
      </View>
      <View style={styles.cardContainer}>
        <AnonymousPost reverseOrder={false} isPlaying={true} />
        <AnonymousPost reverseOrder={true} isPlaying={false} />
      </View>
      <View style={styles.cardContainer}>
        <AnonymousPost reverseOrder={true} isPlaying={false} />
        <AnonymousPost reverseOrder={false} isPlaying={false} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
  },
  container: {
    marginTop: 10,
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
