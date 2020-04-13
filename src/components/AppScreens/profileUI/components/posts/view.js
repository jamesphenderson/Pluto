import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {heightPercentageToDP as hdp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => (
  <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.75} style={styles.regular}>
      <Text style={{fontWeight: 'bold', fontSize: 23, color: '#333'}}>43</Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          marginBottom: 6,
          color: '#333',
        }}>
        voices
      </Text>
      <Icon name={'drama-masks'} size={60} color={'#333'} />
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.75} style={styles.anon}>
      <Text style={{fontWeight: 'bold', fontSize: 23, color: '#333'}}>15</Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          marginBottom: 6,
          color: '#333',
        }}>
        secrets
      </Text>
      <Icon name={'ghost'} size={58} color={'#333'} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: hdp('39%'),
    flexDirection: 'row',
  },
  regular: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#fc8e82',
    marginRight: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
});
