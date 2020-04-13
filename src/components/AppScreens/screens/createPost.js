import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LottieView from 'lottie-react-native';

const CreatePost = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
        <LottieView source={require('./../../../../assets/animations/mic.json')} autoPlay loop />
      <Text>Create Post</Text>
    </View>
  );
};

export default CreatePost;
