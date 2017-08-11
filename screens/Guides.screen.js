import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/guide.actions';
import Carousel from 'react-native-snap-carousel';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import { Icon } from 'react-native-elements';

const guides = [
  {
    id: 1,
    city: 'NEW YORK CITY',
    numberOfSpots: 23,
    coverImage:
      'http://68.media.tumblr.com/fa6042fbfa13384a3ddb2647b29da434/tumblr_mfu7ap6bEJ1r94h9do1_r1_1280.jpg'
  },
  {
    id: 6,
    city: 'BERLIN',
    numberOfSpots: 21,
    coverImage:
      'https://www.usnews.com/dims4/USNEWS/45a7ef2/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F88%2F19%2F606b646f42e0bc90954507b84fe9%2F453292954-10b.jpg'
  },
  {
    id: 5,
    city: 'LOS ANGELES',
    numberOfSpots: 19,
    coverImage:
      'http://www.sothebysinstitute.com/wp-content/uploads/2015/10/los_angeles_banner.jpg'
  },
  {
    id: 2,
    city: 'LONDON',
    numberOfSpots: 12,
    coverImage:
      'http://www.rayawallpaper.com/wp-content/uploads/2017/05/london-tower-bridge-wallpaper-high-resolution.jpg'
  },
  {
    id: 3,
    city: 'TOKYO',
    numberOfSpots: 8,
    coverImage:
      'http://www.grazia.it/content/uploads/2016/07/tokyo-strade.jpg?bac1bf'
  },
  {
    id: 4,
    city: 'SYDNEY',
    numberOfSpots: 3,
    coverImage:
      'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1451939314/HEADER-Facebook-sydney-syd1215.jpg?itok=42EIaL_9'
  }
];

class GuidesScreen extends Component {
  static navigationOptions = () => ({
    title: 'My Guides',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="view-carousel" size={28} color={tintColor} />;
    }
  });

  onGuideTap = guide => {
    this.props.setCurrentGuide(guide);
    this.props.navigation.navigate('guideDetail', { guide });
  };

  renderGuideCard = ({ item, index }, parallaxProps) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.onGuideTap(item)}
        style={styles.guide}
      >
        <View style={styles.guide}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={{ uri: item.coverImage }} />
          </View>
          <View style={styles.guideTextWrapper}>
            <View style={styles.guideCountWrapper}>
              <Text style={styles.cardText}>
                {item.city}
              </Text>
            </View>
            <View
              style={[
                styles.guideCountWrapper,
                { borderTopWidth: 1, borderTopColor: '#e4e4e4' }
              ]}
            >
              <View style={styles.circle} />
              <Text style={[styles.cardText, { fontSize: 16 }]}>
                {item.numberOfSpots}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.spacer} />
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={guides}
          renderItem={this.renderGuideCard}
          sliderWidth={Layout.window.width}
          itemWidth={Layout.window.width * 0.82}
          scrollEndDragDebounceValue={0}
          slideStlye={styles.guide}
          decelerationRate={'fast'}
          animationOptions={{ duration: 300 }}
        />
      </View>
    );
  }
}

const styles = {
  spacer: {
    height: 50,
    width: Layout.window.width
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F5FA'
  },
  guide: {
    alignItems: 'center',
    alignSelf: 'center',
    // flex: 1,
    width: Layout.window.width * 0.82,
    height: Layout.window.height * 0.64,
    shadowColor: '#999',
    backgroundColor: '#fff',
    shadowOpacity: 0.82,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    borderRadius: 5
  },
  imageWrapper: {
    width: Layout.window.width * 0.82,
    height: Layout.window.height * 0.48,
    backgroundColor: '#e4e4e4',
    overflow: 'hidden',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  image: {
    flex: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  guideTextWrapper: {
    flex: 1,
    width: Layout.window.width * 0.82,
    alignItems: 'center',
    // margin: 8,
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  cardText: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1.4,
    fontFamily: 'Avenir Next'
  },
  circle: {
    height: 10,
    width: 10,
    backgroundColor: '#9966FF',
    marginRight: 4,
    borderRadius: 100 / 2
  },
  guideCountWrapper: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default connect(null, actions)(GuidesScreen);
