import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  Container,
  Text,
  Button,
  Content,
  Item,
  Input,
  Icon,
  Body,
  ListItem,
  CheckBox,
} from 'native-base';
import {widthPercentageToDP as wdp} from 'react-native-responsive-screen';

//actions
import {toggleAuth} from './../../actions/auth';

const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <Container style={styles.container}>
      <Content>
        <View style={styles.imageContainer}>
          <Image
            source={require('./../../../assets/img/music.png')}
            style={styles.image}
          />
        </View>
        <Item style={styles.item} regular>
          <Icon active name="ios-person" />
          <Input placeholder="Full Name" />
        </Item>
        <Item style={styles.item} regular>
          <Icon active name="ios-mail" />
          <Input placeholder="Email Address" />
        </Item>
        <Item style={styles.item} regular>
          <Icon active name="md-lock" />
          <Input placeholder="Password" secureTextEntry={true} />
        </Item>
        <Item regular>
          <Icon active name="md-lock" />
          <Input placeholder="Confirm Password" secureTextEntry={true} />
        </Item>
        <ListItem style={styles.checkbox}>
          <CheckBox checked={true} />
          <Body>
            <Text>I agree to the terms & conditions</Text>
          </Body>
        </ListItem>
        <Button
          style={styles.button}
          block
          onPress={() => {
            //TODO - create account, log in user, then dispatch action
            dispatch(toggleAuth(true));
          }}>
          <Text>Create Account</Text>
        </Button>
        <Button
          style={styles.button}
          block
          onPress={() => navigation.navigate('Login')}>
          <Text>Log In Instead</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    padding: wdp('5%'),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  item: {
    marginBottom: 15,
  },
  button: {
    marginBottom: 5
  },
  checkbox: {
    marginTop: 5,
    marginBottom: 5,
  },
});
