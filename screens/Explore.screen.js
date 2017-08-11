import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

class ExploreScreen extends Component {
  static navigationOptions = () => ({
    title: 'Explore',
    tabBarIcon: ({ tintColor }) => {
      return (
        <Icon
          name="ios-add-circle-outline"
          type="ionicon"
          size={28}
          color={tintColor}
        />
      );
    }
  });

  render() {
    return (
      <View>
        <Text>Explore</Text>
        <Text>Explore</Text>
        <Text>Explore</Text>
        <Text>Explore</Text>
      </View>
    );
  }
}

export default ExploreScreen;
