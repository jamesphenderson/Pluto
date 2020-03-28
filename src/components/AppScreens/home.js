import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Container, Button, Content, Item, Input, Icon} from 'native-base';
import {widthPercentageToDP as wdp} from 'react-native-responsive-screen';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Text>Home</Text> */}
      <View
        style={{
          paddingLeft: wdp('5%'),
          paddingRight: wdp('5%'),
          paddingTop: 10,
        }}>
        <Item style={styles.item} rounded>
          <Icon active name="search" />
          <Input placeholder="Find some gossip" />
        </Item>
      </View>
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
  item: {
    // width: wdp("75%")
  },
});
