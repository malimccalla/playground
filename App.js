import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Font, AppLoading } from 'expo';
import { Provider } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import animations from './animations';
import MainNavigator from './navigation/MainNavigator';

import store from './store';

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class App extends React.Component {
  state = { appIsReady: false };

  componentWillMount() {
    Animatable.initializeRegistryWithDefinitions(animations);
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    const fontAssets = cacheFonts([
      { zilla: require('./assets/fonts/ZillaSlabHighlight-Regular.ttf') },
      { 'zilla-bold': require('./assets/fonts/ZillaSlabHighlight-Bold.ttf') }
    ]);

    await Promise.all([...fontAssets]);

    this.setState({ appIsReady: true });
  }

  render() {
    if (!this.state.appIsReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
