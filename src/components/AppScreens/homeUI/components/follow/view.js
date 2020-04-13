import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import UserCard from './person';

export default () => {
  return (
    <ScrollView
      scrollEventThrottle={16}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.innerContainer}>
        <View style={styles.followHeaders}>
          <Text style={styles.headerLeftTxt}>People you can follow</Text>
          <TouchableOpacity style={styles.headerRightView}>
            <Text style={styles.headerRightText}>more ></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.outerUserCardContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <UserCard
              avatarUri={require('./../../../../../../assets/img/music.png')}
              displayName={'Brian'}
            />
            <UserCard
              avatarUri={require('./../../../../../../assets/img/music.png')}
              displayName={'Joy'}
            />
            <UserCard
              avatarUri={require('./../../../../../../assets/img/music.png')}
              displayName={'Drake'}
            />
            <UserCard
              avatarUri={require('./../../../../../../assets/img/music.png')}
              displayName={'Ian'}
            />
            <UserCard
              avatarUri={require('./../../../../../../assets/img/music.png')}
              displayName={'Wendy'}
            />
            <UserCard
              avatarUri={require('./../../../../../../assets/img/music.png')}
              displayName={'Jane'}
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
  followHeaders: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeftTxt: {
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 10,
  },
  headerRightView: {
    justifyContent: 'center',
    marginRight: 13,
  },
  headerRightText: {
    textDecorationLine: 'underline',
  },
  outerUserCardContainer: {
    height: 150,
    marginTop: 15,
  },
});
