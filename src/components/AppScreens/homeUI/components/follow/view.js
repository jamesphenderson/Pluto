import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import UserCard from './person';

export default () => {
  return (
    <ScrollView
      scrollEventThrottle={16}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerTxt}>People you can follow</Text>
        <View style={styles.outerUserCardContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <UserCard
              avatarUri={require('./../../../../../../assets/img/music.png')}
              displayName={'Brian'}
            />
            <UserCard
              avatarUri={require('./../../../../../../assets/img/music.png')}
              displayName={'Wendy'}
            />
            <UserCard
              avatarUri={require('./../../../../../../assets/img/music.png')}
              displayName={'Ian'}
            />
            <UserCard
              avatarUri={require('./../../../../../../assets/img/music.png')}
              displayName={'Nimu'}
            />
            <UserCard
              avatarUri={require('./../../../../../../assets/img/music.png')}
              displayName={'Joy'}
            />
            <UserCard
              avatarUri={require('./../../../../../../assets/img/music.png')}
              displayName={'Drake'}
            />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  innerContainer: {
    flex: 1,
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 10,
  },
  outerUserCardContainer: {
    height: 150,
    marginTop: 15,
  },
});
