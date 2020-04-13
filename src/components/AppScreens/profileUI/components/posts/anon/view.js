import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({postCount}) => (
  <TouchableOpacity activeOpacity={0.75} style={styles.anon}>
    <Text style={styles.postCount}>{postCount}</Text>
    <Text style={styles.title}>secrets</Text>
    <Icon name={'ghost'} size={58} color={'#333'} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  anon: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#fc8e82',
    marginLeft: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postCount: {
    fontWeight: 'bold',
    fontSize: 23,
    color: '#333',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6,
    color: '#333',
  },
});
