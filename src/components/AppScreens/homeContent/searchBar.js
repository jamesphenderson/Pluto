import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Item, Input, Icon} from 'native-base';
import {widthPercentageToDP as wdp} from 'react-native-responsive-screen';

export default () => {
  return (
    <View style={styles.searchContainer}>
      <Item style={styles.item} rounded>
        <Icon active name="search" />
        <Input placeholder="Discover some gossip" />
      </Item>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    paddingLeft: wdp('5%'),
    paddingRight: wdp('5%'),
    paddingTop: 10,
  },
  item: {
    // width: wdp("75%")
  },
});
