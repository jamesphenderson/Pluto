import React from 'react';
import {View, Text, Button} from 'react-native';

const Signup = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Signup</Text>
      <Button title="Login Instead" onPress={() => navigation.navigate('Login')}/>
    </View>
  );
};

export default Signup;
