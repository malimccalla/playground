import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

class GuideDetail extends Component {
  static navigationOptions = () => ({
    title: 'My Guide',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="view-carousel" size={28} color={tintColor} />;
    }
  });

  render() {
    return (
      <View>
        <Text>
          {this.props.navigation.state.params.guide.city}
        </Text>
        <Text>
          {this.props.navigation.state.params.guide.city}
        </Text>
        <Text>
          {this.props.navigation.state.params.guide.city}
        </Text>
        <Text>
          {this.props.navigation.state.params.guide.city}
        </Text>
      </View>
    );
  }
}

export default GuideDetail;
