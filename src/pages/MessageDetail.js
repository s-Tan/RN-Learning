import React, {Component} from 'react';
import {View, Text} from 'react-native';

class MessageDetail extends Component {
  static navigationOptions = {
    title: 'Message',
  };
  render() {
    return (
      <View>
        <Text>This MessageDetail page</Text>
      </View>
    );
  }
}

export default MessageDetail;
