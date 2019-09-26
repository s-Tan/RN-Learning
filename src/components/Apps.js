import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Apps extends Component {
  render() {
    return (
      <View style={styles.appBox}>
        <Text style={styles.title}>我的应用</Text>
        <View style={styles.listBox}>
          <View
            style={styles.item}
            onStartShouldSetResponder={() => {
              this.props.navigation.navigate('Course');
            }}>
            <Image
              style={styles.img}
              source={require('../images/app-course-icon.png')}
            />
            <Text>我的课表</Text>
          </View>
          <View
            style={styles.item}
            onStartShouldSetResponder={() => {
              this.props.navigation.navigate('Train');
            }}>
            <Image
              style={styles.img}
              source={require('../images/app-train-icon.png')}
            />
            <Text>我的培训</Text>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.img}
              source={require('../images/app-certificate-icon.png')}
            />
            <Text>我的证书</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appBox: {},
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  listBox: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
});
