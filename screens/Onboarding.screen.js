import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';

const SLIDE_DATA = [
  {
    slideIndex: 0,
    text: 'A personal travel library created & curated by you.'
  },
  {
    slideIndex: 1,
    text:
      "Add your favourite cities. Save your favourite spots. It's your world."
  },
  {
    slideIndex: 2,
    text: 'Connect with friends to share your spots and discover theirs.'
  },
  {
    slideIndex: 3,
    text: `To get started, Log In with Facebook.`
  }
];

class OnboardingScreen extends Component {
  state = { index: 0, animation: 'fadeInRight' };

  onScrollEnd = (e, state) => {
    const animation =
      state.index > this.state.index ? 'fadeInRight' : 'fadeInLeft';
    this.setState({ index: state.index, animation });
  };

  renderSlides() {
    return SLIDE_DATA.map(slide => {
      return (
        <View key={slide.slideIndex} style={styles.slide}>
          {this.renderSlideContent(slide)}
        </View>
      );
    });
  }

  renderButton() {
    if (this.state.index === SLIDE_DATA.length - 1) {
      return (
        <Animatable.View
          animation="slideInUp"
          easing="ease-out"
          delay={500}
          style={styles.buttonWrapper}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('main')}
          >
            <Image
              style={styles.facebookLogo}
              source={require('../assets/images/facebook_logo.png')}
            />
            <Text style={styles.buttonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </Animatable.View>
      );
    }
  }

  renderSlideContent({ slideIndex, text }) {
    if (this.state.index === slideIndex) {
      return (
        <View style={styles.wrapper}>
          {this.renderSlideIcon(slideIndex)}
          <Animatable.Text
            style={styles.text}
            easing="ease-out"
            animation={this.state.animation}
          >
            {text}
          </Animatable.Text>
          {this.renderButton()}
        </View>
      );
    }
  }

  renderSlideIcon(slideIndex) {
    switch (slideIndex) {
      case 0:
        return <Text style={styles.title}>TRIPPIN'</Text>;
      case 1:
        return (
          <Image
            style={{ height: 200, width: 200, marginTop: -80 }}
            source={require('../assets/images/globe.gif')}
          />
        );
      case 2:
        return (
          <Image
            source={require('../assets/images/connect.png')}
            resizeMode="contain"
            style={{ marginBottom: 32, height: 90 }}
          />
        );
      default:
        return <Text style={styles.title}>TRIPPIN'</Text>;
    }
  }

  render() {
    return (
      <Swiper
        loop={false}
        onMomentumScrollEnd={this.onScrollEnd}
        activeDotColor={Colors.lime}
        dotColor="#787284"
        showsPagination={this.state.index < SLIDE_DATA.length - 1}
      >
        {this.renderSlides()}
      </Swiper>
    );
  }
}

var styles = {
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24
    // marginBottom: 100
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 38,
    paddingBottom: 22,
    fontFamily: 'zilla-bold',
    color: Colors.lime
  },
  button: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.facebook,
    borderRadius: 5
  },
  buttonWrapper: {
    height: 52,
    width: Layout.window.width * 0.9,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 16
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontWeight: '700'
  },
  facebookLogo: {
    height: 24,
    width: 24,
    marginRight: 24
  }
};

export default OnboardingScreen;
