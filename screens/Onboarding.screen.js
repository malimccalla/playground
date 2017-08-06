import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Slides from '../components/onboarding/Slides';

const SLIDE_DATA = [
  {
    slideIndex: 0,
    title: 'Be there.',
    text: 'Trippin is a personal travel library created & curated by you.',
    uri:
      'https://s-media-cache-ak0.pinimg.com/originals/ef/d8/68/efd86898401b7d5c942ff1739c6d894a.gif',
    backgroundColor: '#394b5e',
    size: 100,
    textColor: 'white'
  },
  {
    slideIndex: 1,
    title: 'Discover the world.',
    text: 'The only travel guide worth having is the one you write yourself',
    uri:
      'https://s-media-cache-ak0.pinimg.com/originals/a5/6f/c9/a56fc90a5ed23e3047aa9cc902750b54.gif',
    backgroundColor: '#141414',
    size: 150,
    textColor: 'white'
  },
  {
    slideIndex: 2,
    title: 'Title 3',
    text:
      "Add your favourite cities. Save your favourite spots. It's your world.",
    uri:
      'https://cdn.dribbble.com/users/79659/screenshots/2823377/storytrail-cities3.gif',
    backgroundColor: '#ffffff',
    textColor: '#333',
    size: 200
  }
];

class OnboardingScreen extends Component {
  render() {
    return <Slides data={SLIDE_DATA} />;
  }
}

export default OnboardingScreen;
