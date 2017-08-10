import React, { Component } from 'react';
import { Text, View, FlatList, Image, Easing } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Layout from '../constants/Layout';
import { Icon } from 'react-native-elements';

const guides = [
  { id: 1, city: 'New York City' },
  { id: 2, city: 'London' },
  { id: 3, city: 'Tokyo' },
  { id: 4, city: 'Melbourne' },
  { id: 5, city: 'Los Angeles' },
  { id: 6, city: 'Berlin' }
];

class GuidesScreen extends Component {
  static navigationOptions = () => ({
    title: 'Map',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="view-carousel" size={28} color={tintColor} />;
    }
  });

  renderGuideCard = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.guide}>
        <Image
          style={styles.image}
          source={{
            uri:
              'http://www.dummymag.com/media/uploads/features/BIGGIEWAVEY.png'
          }}
        />
        <Text>
          {item.city}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.screen}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={guides}
          renderItem={this.renderGuideCard}
          sliderWidth={Layout.window.width}
          itemWidth={Layout.window.width * 0.8}
          enableSnap
          contentContainerStyle={styles.screen}
          swipeThreshold={80}
          scrollEndDragDebounceValue={50}
          slideStlye={styles.guide}
          style={{ top: 65 }}
          decelerationRate="fast"
          animationOptions={{ duration: 300 }}
        />
      </View>
    );
  }
}

const styles = {
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F5FA'
  },
  guide: {
    alignItems: 'center',
    alignSelf: 'center',
    width: Layout.window.width * 0.8,
    height: 415,
    shadowColor: '#999',
    backgroundColor: '#fff',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    borderRadius: 5
  },
  image: {
    flex: 1
  }
};

export default GuidesScreen;
