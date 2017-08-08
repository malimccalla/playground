import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Layout from '../constants/Layout';

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
  state = { index: 0 };

  onScrollEnd = (e, state) => {
    this.titleText.fadeInRight(800).then(() => {
      this.setState({ index: state.index });
      console.log('Index is:', state.index);
    });
  };

  renderSlides() {
    return SLIDE_DATA.map(slide => {
      return (
        <View key={slide.slideIndex} style={styles.slide}>
          <Animatable.Text
            style={styles.title}
            ref={e => {
              this.titleText = e;
            }}
          >
            {slide.text}
          </Animatable.Text>
        </View>
      );
    });
  }

  render() {
    return (
      <Swiper
        loop={false}
        onMomentumScrollEnd={this.onScrollEnd}
        activeDotColor="#B7FD56"
        dotColor="#444444"
      >
        {this.renderSlides()}
      </Swiper>
    );
  }
}

var styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141414',
    padding: 24
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center'
  }
};

export default OnboardingScreen;
