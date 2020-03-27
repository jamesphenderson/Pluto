import React, {useState} from 'react';
import {View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {slides} from './../../utils/onboarding/slides';

//color styles
import {LightTheme} from './../../styles';

// utils
// import {requestCameraPermissions} from './../../utils/permissions';

const IntroSlider = ({navigation}) => {
  const [currentSlideIndex, updateCurrentSlideIndex] = useState(0);
  // if(currentSlideIndex === 2) requestCameraPermissions()
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AppIntroSlider
        slides={slides}
        bottomButton={true}
        buttonStyle={{backgroundColor: LightTheme.foreground.text}}
        doneLabel={'Complete'}
        onSlideChange={index => updateCurrentSlideIndex(index)}
        onDone={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default IntroSlider;
