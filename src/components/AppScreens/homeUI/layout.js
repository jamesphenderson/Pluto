import React from 'react';
import {View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wdp} from 'react-native-responsive-screen';
import {SearchBar, ExploreView} from './components';

export default () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <ExploreView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: wdp('5%'),
    paddingRight: wdp('5%'),
  },
});
