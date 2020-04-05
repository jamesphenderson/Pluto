import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button} from 'native-base';

export default () => (
  <Button style={styles.editProfileBtn} block>
    <Text style={styles.editProfileBtnText}>Edit my profile</Text>
  </Button>
);

const styles = StyleSheet.create({
  editProfileBtn: {
    backgroundColor: '#940a37',
    marginTop: 10,
  },
  editProfileBtnText: {
    fontSize: 15,
    color: '#fff',
  },
});
