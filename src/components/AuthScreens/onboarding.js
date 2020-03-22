import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'intro',
    title: 'Intro',
    text: 'Description.\nSay something cool',
    image: require('./../../../assets/img/music.png'),
    backgroundColor: '#59b2ab',
    imageStyle: {width: 400, height: 400, resizeMode: 'contain'}
  },
  {
    key: 'purpose',
    title: 'Purpose',
    text: 'Elaborate\nShare what your app does',
    image: require('./../../../assets/img/music.png'),
    backgroundColor: '#febe29',
    imageStyle: {width: 400, height: 400, resizeMode: 'contain'}
  },
  {
    key: 'finish',
    title: 'Blastoff',
    text: "Prologue\nEnd with a bang",
    image: require('./../../../assets/img/music.png'),
    backgroundColor: '#22bcb5',
    imageStyle: {width: 400, height: 400, resizeMode: 'contain'}
  }
];

const IntroSlider = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AppIntroSlider slides={slides} onDone={() => navigation.navigate("Login")}/>
    </View>
  );
};

export default IntroSlider;
