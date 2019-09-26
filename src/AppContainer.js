import React from 'react';
import {Icon} from '@ant-design/react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Login from './pages/Login';
import Home from './pages/Home';
import Course from './pages/Course';
import Notice from './pages/Notice';
import NoticeDetail from './pages/NoticeDetail';
import Train from './pages/Train';
import TrainDetail from './pages/TrainDetail';
import Message from './pages/Message';
import MessageDetail from './pages/MessageDetail';
import Center from './pages/Center';
import ScanQrCode from './pages/ScanQrCode';

const HomeStack = createStackNavigator(
  {Login, Home, Notice, Course, NoticeDetail},
  {
    navigationOptions: {
      tabBarLabel: '首页',
    },
    defaultNavigationOptions: {
      title: '首页',
    },
  },
);
const TrainStack = createStackNavigator({Train, TrainDetail});
const MessageStack = createStackNavigator({Message, MessageDetail});
const CenterStack = createStackNavigator({Center});
const ScanQrCodeStack = createStackNavigator({ScanQrCode});
HomeStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index === 0) {
    tabBarVisible = false;
  }
  return {
    tabBarLabel: '首页',
    tabBarVisible,
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      return <Icon name="home" color={tintColor} />;
    },
  };
};
TrainStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarLabel: '我的培训',
    tabBarVisible,
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      return <Icon name="project" color={tintColor} />;
    },
  };
};

ScanQrCodeStack.navigationOptions = ({navigation}) => {
  return {
    tabBarLabel: '扫码签到',
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      return <Icon name="scan" color={tintColor} />;
    },
  };
};

MessageStack.navigationOptions = ({navigation}) => {
  return {
    tabBarLabel: '我的消息',
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      return <Icon name="mail" color={tintColor} />;
    },
  };
};

CenterStack.navigationOptions = ({navigation}) => {
  return {
    tabBarLabel: '个人中心',
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      return <Icon name="user" color={tintColor} />;
    },
  };
};

export default createAppContainer(
  createBottomTabNavigator({
    HomeStack,
    TrainStack,
    ScanQrCodeStack,
    MessageStack,
    CenterStack,
  }),
);
