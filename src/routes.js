import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from '~/pages/Home';
import RepositoryDetails from '~/pages/RepositoryDetails';

const Routes = () => createAppContainer(
  createSwitchNavigator(
    {
      Home,
      RepositoryDetails,
    },
    {
      initialRouteName: 'Home',
    },
  ),
);

export default Routes;
