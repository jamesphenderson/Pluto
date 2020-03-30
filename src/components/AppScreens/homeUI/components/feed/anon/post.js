import React from 'react';
import {StyleSheet, View} from 'react-native';

export default ({reverseOrder}) => (
  <View style={reverseOrder ? styles.card1 : styles.card2} />
);

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
  },
  card1: {
    height: 150,
    backgroundColor: '#801336',
    flex: 3,
    margin: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  card2: {
    height: 150,
    backgroundColor: '#941304',
    flex: 2,
    margin: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});
