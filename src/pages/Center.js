import React, {Component} from 'react';
import {View, Text} from 'react-native';
import DeviceInfo from 'react-native-device-info';

class Center extends Component {
  static navigationOptions = {
    title: '个人中心',
  };
  constructor(props) {
    super(props);
    this.state = {
      version: null,
    };
  }
  componentDidMount() {
    this.getAppVersion();
  }
  getAppVersion() {
    DeviceInfo.getVersion().then(version => {
      console.log(version);
      this.setState({version});
    });
  }

  render() {
    return (
      <View>
        <Text onPress={() => this.props.navigation.navigate('Train')}>
          This center page1
        </Text>
        <Text>版本：{this.state.version}</Text>
      </View>
    );
  }
}

export default Center;
