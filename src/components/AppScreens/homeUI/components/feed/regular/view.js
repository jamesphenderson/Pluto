import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RegularPost from './post';
// import {fetchPosts} from './../../../../../../api';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>In case you missed</Text>
      <View style={styles.cardContainer}>
        <RegularPost
          avatarUri={require('./../../../../../../../assets/img/music.png')}
          displayName={'Brian'}
          timePosted={'5 mins ago'}
          hasBeenLiked={false}
          isPlaying={true}
        />
        <RegularPost
          avatarUri={require('./../../../../../../../assets/img/music.png')}
          displayName={'Diana'}
          timePosted={'2 hours ago'}
          hasBeenLiked={true}
          isPlaying={false}
        />
        <RegularPost
          avatarUri={require('./../../../../../../../assets/img/music.png')}
          displayName={'Willis'}
          timePosted={'2 hours ago'}
          hasBeenLiked={false}
          isPlaying={false}
        />
        <RegularPost
          avatarUri={require('./../../../../../../../assets/img/music.png')}
          displayName={'Kevin'}
          timePosted={'2 hours ago'}
          hasBeenLiked={false}
          isPlaying={false}
        />
        <RegularPost
          avatarUri={require('./../../../../../../../assets/img/music.png')}
          displayName={'Daniel'}
          timePosted={'2 hours ago'}
          hasBeenLiked={false}
          isPlaying={false}
        />
        <RegularPost
          avatarUri={require('./../../../../../../../assets/img/music.png')}
          displayName={'Boonk'}
          timePosted={'2 hours ago'}
          hasBeenLiked={false}
          isPlaying={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
  },
  container: {
    marginTop: 20,
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
