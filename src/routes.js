import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import { colors } from '~/styles';

import Home from '~/pages/Home';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Home,
    },
    {
      initialRouteName: userLogged ? 'Home' : 'Home',
    },
  ),
);

export default Routes;
