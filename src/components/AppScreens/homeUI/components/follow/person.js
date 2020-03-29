import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export default ({avatarUri, displayName, color}) => {
  return (
    <View
      style={{...styles.container, backgroundColor: color ? color : '#fff'}}>
      <View style={styles.imgView}>
        <Image source={avatarUri} style={styles.imgStyle} />
      </View>
      <View style={styles.displayNameView}>
        <Text>{displayName}</Text>
      </View>
      <View style={styles.followView}>
        <TouchableOpacity style={styles.followBtn}>
          <Text style={styles.followTxt}>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 130,
    borderWidth: 0.5,
    borderColor: '#888',
    marginRight: 10,
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  imgView: {
    flex: 3,
  },
  imgStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  displayNameView: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 5,
  },
  followView: {
    alignItems: 'center',
  },
  followBtn: {
    backgroundColor: '#940a27',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  followTxt: {
    color: '#fff',
  },
});
