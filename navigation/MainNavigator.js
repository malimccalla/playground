import { TabNavigator, StackNavigator } from 'react-navigation';

import OnboardingScreen from '../screens/Onboarding.screen';
import AuthScreen from '../screens/Auth.screen';

import GuidesScreen from '../screens/Guides.screen';
import ExploreScreen from '../screens/Explore.screen';
import ProfileScreen from '../screens/Profile.screen';
import GuideDetail from '../screens/GuideDetail.screen';

export default TabNavigator(
  {
    onboarding: { screen: OnboardingScreen },
    auth: { screen: AuthScreen },
    main: {
      screen: TabNavigator(
        {
          guides: {
            screen: StackNavigator({
              guidesList: { screen: GuidesScreen },
              guideDetail: { screen: GuideDetail }
            })
          },
          explore: { screen: ExploreScreen },
          profile: { screen: ProfileScreen }
        },
        {
          tabBarPosition: 'bottom',
          swipeEnabled: false,
          tabBarOptions: {
            activeTintColor: '#39E782',
            labelStyle: {
              fontSize: 12
            },
            showLabel: false,
            style: {
              backgroundColor: '#050F1A'
            }
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
