import React from 'react';
import {View, Text, Button} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login</Text>
      <Button title="Forgot Password" onPress={() => navigation.navigate('ForgotPassword')}/>
      <Button title="Signup Instead" onPress={() => navigation.navigate('Signup')}/>
    </View>
  );
};

export default Login;
