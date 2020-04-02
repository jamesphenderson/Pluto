import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default ({
  avatarUri,
  displayName,
  timePosted,
  hasBeenLiked,
  isPlaying,
}) => (
  <TouchableOpacity activeOpacity={0.6} style={styles.card}>
    <TouchableOpacity activeOpacity={0.6} style={styles.leftCard}>
      <View style={styles.avatarView}>
        <Image source={avatarUri} style={styles.avatarImg} />
      </View>
      <View style={styles.txtView}>
        <Text style={styles.displayName}>{displayName}</Text>
        <Text>{timePosted}</Text>
      </View>
    </TouchableOpacity>
    <View style={styles.rightCard}>
      <View style={styles.iconView}>
        <TouchableOpacity activeOpacity={0.4}>
          {hasBeenLiked ? (
            <MaterialIcon
              name={'heart-multiple'}
              size={25}
              color={'#941304'}
              style={styles.leftMostIcon}
            />
          ) : (
            <MaterialIcon
              name={'heart-multiple-outline'}
              size={25}
              color={'#000'}
              style={styles.leftMostIcon}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.4}>
          {isPlaying ? (
            <FontAwesomeIcon name={'pause'} size={23} color={'#941304'} />
          ) : (
            <SimpleLineIcon name={'control-play'} size={23} color={'#000'} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    backgroundColor: '#fff',
    flex: 3,
    margin: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopWidth: 0.2,
    borderColor: '#333',
  },
  leftCard: {
    flexDirection: 'row',
  },
  avatarView: {
    justifyContent: 'center',
  },
  avatarImg: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  txtView: {
    justifyContent: 'center',
  },
  displayName: {
    fontWeight: 'bold',
  },
  rightCard: {
    justifyContent: 'center',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftMostIcon: {
    marginRight: 20,
  },
});
