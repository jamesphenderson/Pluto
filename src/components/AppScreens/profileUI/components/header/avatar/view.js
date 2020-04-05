import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default () => (
  <View style={styles.container}>
    <Image
      source={require('./../../../../../../../assets/img/music.png')}
      style={styles.avatar}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderWidth: 1,
    borderColor: 'gray',
    borderTopRightRadius: 55,
    borderTopLeftRadius: 55,
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
    backgroundColor: '#d0f0f0',
    marginLeft: 25,
    marginRight: 25,
  },
});
