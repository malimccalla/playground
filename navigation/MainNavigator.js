import { TabNavigator, StackNavigator } from 'react-navigation';

import OnboardingScreen from '../screens/Onboarding.screen';
import AuthScreen from '../screens/Auth.screen';

import GuidesScreen from '../screens/Guides.screen';
import ExploreScreen from '../screens/Explore.screen';
import ProfileScreen from '../screens/Profile.screen';

export default TabNavigator(
  {
    onboarding: { screen: OnboardingScreen },
    auth: { screen: AuthScreen },
    main: {
      screen: TabNavigator(
        {
          guides: { screen: GuidesScreen },
          explore: { screen: ExploreScreen },
          profile: { screen: ProfileScreen }
        },
        {
          tabBarPosition: 'bottom',
          swipeEnabled: true,
          tabBarOptions: {
            labelStyle: { fontSize: 12 }
          }
        }
      )
    }
  },
  {
    lazy: true,
    navigationOptions: {
      tabBarVisible: false
    }
  }
);
