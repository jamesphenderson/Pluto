import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DisplayNameView} from './displayName';
import {BioView} from './bio';
import {EditProfileView} from './editProfile';

export default () => (
  <View>
    <View style={styles.metadata}>
      <DisplayNameView />
      <BioView />
    </View>
    <EditProfileView />
  </View>
);

const styles = StyleSheet.create({
  metadata: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
