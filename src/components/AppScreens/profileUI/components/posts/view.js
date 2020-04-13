import React from 'react';
import {StyleSheet, View} from 'react-native';
import {heightPercentageToDP as hdp} from 'react-native-responsive-screen';
import {AnonCardView} from './anon';
import {RegularCardView} from './regular';

export default () => (
  <View style={styles.container}>
    <RegularCardView postCount={43} />
    <AnonCardView postCount={16} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hdp('39%'),
    marginTop: 15,
  },
});
