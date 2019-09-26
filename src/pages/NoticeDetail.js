import React, {Component} from 'react';
import {View, Text} from 'react-native';

class NoticeDetail extends Component {
  static navigationOptions = {
    title: '公告详情',
  };
  render() {
    return (
      <View>
        <Text>This NoticeDetail page</Text>
      </View>
    );
  }
}

export default NoticeDetail;
