import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'native-base';

export default () => (
  <View style={styles.container}>
    <Button style={styles.btn} block>
      <Text style={styles.btnText}>Load more posts</Text>
    </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#fb6251',
  },
  btnText: {
    fontSize: 15,
    color: '#fff',
  },
});
