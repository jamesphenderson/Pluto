import React from 'react';
import {View, Text, Button} from 'react-native';

const Onboarding = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>App Intro</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')}/>
    </View>
  );
};

export default Onboarding;
