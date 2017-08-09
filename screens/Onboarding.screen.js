import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';

const SLIDE_DATA = [
  {
    slideIndex: 0,
    title: 'TRIPPIN',
    text: 'A personal travel library created & curated by you.',
    uri:
      'https://s-media-cache-ak0.pinimg.com/originals/a5/6f/c9/a56fc90a5ed23e3047aa9cc902750b54.gif',
    backgroundColor: '#141414',
    size: 150,
    textColor: 'white'
  },
  {
    slideIndex: 1,
    title: 'Title 3',
    text:
      "Add your favourite cities. Save your favourite spots. It's your world.",
    uri:
      'https://cdn.dribbble.com/users/79659/screenshots/2823377/storytrail-cities3.gif',
    backgroundColor: '#ffffff',
    textColor: 'white',
    size: 200
  },
  {
    slideIndex: 2,
    title: 'Title 3',
    text: 'Connect with friends to share your spots and discover theirs.',
    uri:
      'https://cdn.dribbble.com/users/79659/screenshots/2823377/storytrail-cities3.gif',
    backgroundColor: '#ffffff',
    textColor: 'white',
    size: 200
  },
  {
    slideIndex: 3,
    title: 'Title 3',
    text: 'Come on in.',
    uri:
      'https://cdn.dribbble.com/users/79659/screenshots/2823377/storytrail-cities3.gif',
    backgroundColor: '#ffffff',
    textColor: 'white',
    size: 200
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
            onPress={() => this.props.navigation.navigate('auth')}
          >
            <Text style={styles.buttonText}>Start Trippin</Text>
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
    backgroundColor: Colors.lime,
    borderRadius: 5
  },
  buttonWrapper: {
    height: 60,
    width: Layout.window.width * 0.92,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 16
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.black,
    fontWeight: '600'
  }
};

export default OnboardingScreen;
