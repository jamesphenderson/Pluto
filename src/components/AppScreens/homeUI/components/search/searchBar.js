import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Item, Input, Icon} from 'native-base';

export default () => {
  return (
    <View style={styles.searchContainer}>
      <Item rounded>
        <Icon active name="search" />
        <Input placeholder="Discover some gossip" />
      </Item>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    paddingTop: 10,
  },
});
