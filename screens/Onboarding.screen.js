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
  onScrollEnd = (e, state) => {
    console.log('Index is:', state.index);
  };

  render() {
    return (
      <Swiper loop={false} showsButtons onMomentumScrollEnd={this.onScrollEnd}>
        <View style={styles.slide1}>
          <Animatable.Text animation="fadeInRight" style={styles.text}>
            View 1
          </Animatable.Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>View 2</Text>
        </View>
        <View style={styles.slide3}>
          <Animatable.Text animation="fadeInRight" style={styles.text}>
            View 3
          </Animatable.Text>
        </View>
      </Swiper>
    );
  }
}

var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
};

export default OnboardingScreen;
