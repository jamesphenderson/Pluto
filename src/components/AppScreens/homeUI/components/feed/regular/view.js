import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RegularPost from './post';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Voices you missed</Text>
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
          displayName={'Morty'}
          timePosted={'2 hours ago'}
          hasBeenLiked={false}
          isPlaying={false}
        />
        <RegularPost
          avatarUri={require('./../../../../../../../assets/img/music.png')}
          displayName={'Kevin'}
          timePosted={'2 hours ago'}
          hasBeenLiked={true}
          isPlaying={false}
        />
        <RegularPost
          avatarUri={require('./../../../../../../../assets/img/music.png')}
          displayName={'Joy'}
          timePosted={'2 hours ago'}
          hasBeenLiked={false}
          isPlaying={false}
        />
        <RegularPost
          avatarUri={require('./../../../../../../../assets/img/music.png')}
          displayName={'Ricky'}
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
    marginTop: 10,
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
