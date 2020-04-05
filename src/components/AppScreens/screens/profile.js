import React from 'react';
import {StyleSheet, View} from 'react-native';
import Layout from './../profileUI';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Layout />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 60,
    flex: 1,
  },
  item: {
    // width: wdp("75%")
  },
});
