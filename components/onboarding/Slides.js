import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Layout from '../../constants/Layout';

class Slides extends Component {
  renderSlides() {
    return this.props.data.map(slide => {
      return (
        <View
          key={slide.slideIndex}
          style={[
            styles.slideStyle,
            { backgroundColor: slide.backgroundColor }
          ]}
        >
          <Image
            style={{ width: slide.size, height: slide.size, marginBottom: 42 }}
            source={{ uri: slide.uri }}
          />
          <Text style={[styles.titleStyles, { color: slide.textColor }]}>
            {slide.title}
          </Text>
          <Text style={[styles.textStyles, { color: slide.textColor }]}>
            {slide.text}
          </Text>
        </View>
      );
    });
  }

  render() {
    return (
      // <View style={styles.container}>
      <ScrollView
        scrollEnabled
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {this.renderSlides()}
      </ScrollView>
      // {/* <View style={styles.paginatorStyle} /> */}
      // </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#90d78c'
  },
  slideStyle: {
    flex: 1,
    width: Layout.window.width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  paginatorStyle: {
    backgroundColor: '#000000',
    height: 30,
    width: 30,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute'
  },
  textStyles: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
    margin: 24,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center'
  },
  titleStyles: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center'
  }
};

export default Slides;
