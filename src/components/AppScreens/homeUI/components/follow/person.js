import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export default ({avatarUri, displayName, color}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: 140,
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
    alignItems: 'center',
  },
  imgStyle: {
    flex: 1,
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  displayNameView: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 5,
  },
  followView: {
    alignItems: 'center',
    paddingBottom: 2,
    paddingTop: 2,
  },
  followBtn: {
    backgroundColor: '#940a27',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  followTxt: {
    color: '#fff',
  },
});
