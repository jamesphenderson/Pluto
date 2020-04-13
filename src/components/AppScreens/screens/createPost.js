import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }
  startAnimation = () => {
    this.animation.play();
    this.setState({isPlaying: true});
  };
  stopAnimation = () => {
    this.animation.reset();
    this.setState({isPlaying: false});
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={
            this.state.isPlaying ? this.stopAnimation : this.startAnimation
          }>
          <LottieView
            source={require('./../../../../assets/animations/mic.json')}
            ref={animation => {
              this.animation = animation;
            }}
            style={{height: 250, width: 250}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default CreatePost;
