import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Train extends Component {
  static navigationOptions = {
    title: '我的培训',
  };
  render() {
    return (
      <View>
        <Text onPress={() => this.props.navigation.navigate('TrainDetail')}>
          This Train page
        </Text>
      </View>
    );
  }
}

export default Train;
