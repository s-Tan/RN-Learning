import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Notice extends Component {
  static navigationOptions = {
    title: '系统公告',
  };
  render() {
    return (
      <View>
        <Text onPress={() => this.props.navigation.navigate('NoticeDetail')}>
          This NoticeDetail page
        </Text>
      </View>
    );
  }
}

export default Notice;
