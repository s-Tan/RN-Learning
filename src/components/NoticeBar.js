import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from '@ant-design/react-native';

export default class NoticeBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.navigation);
  }
  handleJumpNotice() {
    this.props.navigation.navigate('Notice');
  }
  render() {
    return (
      <View style={styles.notice}>
        <View style={styles.lfBox}>
          <Icon
            style={styles.icon}
            name="notification"
            size="md"
            color="#fc6d26"
          />
          <Text style={styles.text} numberOfLines={1}>
            文中文中文中文文中文中文中文中文中文中文文中文中文中文文中文中文中文中文中文中文文中文中文中文文中文中文中文中文中文中文
          </Text>
        </View>
        <Icon
          style={(styles.icon, styles.right)}
          name="right"
          size="md"
          color="#fc6d26"
          onPress={() => this.handleJumpNotice()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  notice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  lfBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    flex: 1,
    marginLeft: 5,
  },
  icon: {},
  right: {
    color: '#aaa',
  },
});
