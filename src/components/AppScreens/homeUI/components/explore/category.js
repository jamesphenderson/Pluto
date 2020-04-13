import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export default ({imgUri, title, color}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{...styles.container, backgroundColor: color ? color : '#fff'}}>
      <View style={styles.imgView}>
        <Image source={imgUri} style={styles.imgStyle} />
      </View>
      <View style={styles.txtView}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 120,
    borderWidth: 0.5,
    borderColor: '#888',
    marginRight: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  imgView: {
    flex: 2,
    marginTop: 10,
  },
  imgStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  txtView: {
    alignItems: 'center',
    paddingBottom: 13,
  },
});
