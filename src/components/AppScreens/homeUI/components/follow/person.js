import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default ({avatarUri, displayName, color}) => {
  return (
    <View
      style={{...styles.container, backgroundColor: color ? color : '#fff'}}>
      <View style={styles.imgView}>
        <Image source={avatarUri} style={styles.imgStyle} />
      </View>
      <View style={styles.txtView}>
        <Text>{displayName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 120,
    borderWidth: 0.5,
    borderColor: '#888',
    marginRight: 10,
  },
  imgView: {
    flex: 2,
  },
  imgStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  txtView: {
    flex: 1,
    alignItems: 'center',
  },
});
