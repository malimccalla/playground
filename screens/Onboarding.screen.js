import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
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
    text:
      "Add your favourite cities. Save your favourite spots. It's your world.",
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

  renderSlideContent({ slideIndex, text }) {
    if (this.state.index === slideIndex) {
      return (
        <View style={styles.wrapper}>
          <Text style={styles.title}>TRIPPIN'</Text>
          <Animatable.Text
            style={styles.text}
            easing="ease-out"
            animation={this.state.animation}
          >
            {text}
          </Animatable.Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Swiper
        loop={false}
        onMomentumScrollEnd={this.onScrollEnd}
        activeDotColor={Colors.lime}
        dotColor="#787284"
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
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121113'
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center'
  },
  title: {
    color: 'white',
    fontSize: 38,
    paddingBottom: 22,
    fontFamily: 'zilla-bold',
    color: Colors.lime
  }
};

export default OnboardingScreen;
