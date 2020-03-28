import React from 'react';
import {StyleSheet, View} from 'react-native';

//layout of home
import Layout from './homeContent';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Layout />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 60,
    flex: 1,
  },
});
