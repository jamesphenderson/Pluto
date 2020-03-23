import React from 'react';
import { StyleSheet } from 'react-native'
import { Container, Text, Button, Content, Item, Input, Icon } from 'native-base';
import {widthPercentageToDP as wdp} from "react-native-responsive-screen"

const Login = ({navigation}) => {
  return (
      <Container style={styles.container}>
        <Content>
          <Item style={styles.item} regular>
            <Icon active name="ios-mail" />
            <Input placeholder='Email Address'/>
          </Item>
          <Item style={styles.item} regular>
            <Icon active name="md-lock" />
            <Input placeholder='Password' secureTextEntry={true}/>
          </Item>
          <Button style={styles.button} block onPress={() => navigation.navigate("Home")}>
            <Text>Login</Text>
          </Button>
          <Button style={styles.button} block onPress={() => navigation.navigate("Signup")}>
            <Text>Create An Account</Text>
          </Button>
        </Content>
      </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: wdp("5%"),
  },
  item: {
    marginBottom: 15
  },
  button: {
    marginBottom: 5
  }
})