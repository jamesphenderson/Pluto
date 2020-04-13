import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {Container, Text, Button, Content, Item, Input, Icon} from 'native-base';
import {widthPercentageToDP as wdp} from 'react-native-responsive-screen';

//color styles
import {LightTheme} from './../../styles';

//actions
import {toggleAuth} from './../../actions/auth';

const Login = ({navigation}) => {
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
          <Icon active name="ios-mail" />
          <Input placeholder="Email Address" />
        </Item>
        <Item style={styles.item} regular>
          <Icon active name="md-lock" />
          <Input placeholder="Password" secureTextEntry={true} />
        </Item>
        <Button
          activeOpacity={0.5}
          style={styles.button}
          block
          onPress={() => {
            //TODO - log in user, then dispatch action
            dispatch(toggleAuth(true));
          }}>
          <Text>Sign In</Text>
        </Button>
        <Button
          activeOpacity={0.5}
          style={styles.button}
          block
          onPress={() => navigation.navigate('Signup')}>
          <Text>Create An Account</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: wdp('5%'),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  item: {
    marginBottom: 15,
  },
  button: {
    marginBottom: 5,
    backgroundColor: '#fb6251',
  },
});
