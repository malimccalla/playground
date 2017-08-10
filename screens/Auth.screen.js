import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

class AuthScreen extends Component {
  render() {
    return <View style={styles.screen} />;
  }
}

styles = {
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black
  }
};

export default AuthScreen;
