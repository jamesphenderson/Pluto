import React from 'react';
import {View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {slides} from './../../utils/onboarding/slides';

const IntroSlider = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AppIntroSlider
        slides={slides}
        bottomButton={true}
        buttonStyle={{backgroundColor: "#444"}}
        doneLabel={'Complete'}
        onDone={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default IntroSlider;
