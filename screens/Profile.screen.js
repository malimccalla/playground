import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

class ProfileScreen extends Component {
  static navigationOptions = () => ({
    title: 'Map',
    tabBarIcon: ({ tintColor }) => {
      return (
        <Icon name="ios-person" type="ionicon" size={30} color={tintColor} />
      );
    }
  });

  render() {
    return (
      <View>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
      </View>
    );
  }
}

export default ProfileScreen;
