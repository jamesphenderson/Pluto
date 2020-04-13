import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default ({reverseOrder, isPlaying}) => (
  <TouchableOpacity
    activeOpacity={0.85}
    style={reverseOrder ? styles.card1 : styles.card2}>
    <Icon
      name={isPlaying ? 'pause' : 'play'}
      size={40}
      color={reverseOrder ? '#333' : '#f3f3f3'}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
  },
  card1: {
    height: 150,
    backgroundColor: '#fca59c',
    flex: 2.5,
    margin: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card2: {
    height: 150,
    backgroundColor: '#fb786a',
    flex: 2,
    margin: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
