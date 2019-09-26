import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Message extends Component {
  static navigationOptions = {
    title: '我的消息',
  };
  render() {
    return (
      <View>
        <Text>This Message page</Text>
      </View>
    );
  }
}

export default Message;
