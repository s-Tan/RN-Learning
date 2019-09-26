import {createStackNavigator} from 'react-navigation-stack';
import Home from '../pages/Home';
import Notice from '../pages/Notice';
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: '首页',
      },
    },
    Notice: {
      screen: Notice,
      navigationOptions: {
        title: '系统公告',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);
export {AppNavigator};
