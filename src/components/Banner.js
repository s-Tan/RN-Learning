import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiperShow: false,
    };
  }
  componentDidMount() {
    //系统自带方法只调用一次
    setTimeout(() => {
      this.setTimeout = this.setState({swiperShow: true});
    }, 1);
  }
  //移除定时器
  componentWillUnmount() {
    this.setTimeout && clearTimeout(this.setTimeout);
  }
  render() {
    return (
      // <View style={styles.bannerBox}>
      //   <Text style={styles.text}>在线学习</Text>
      //   <Image style={styles.img} source={require('../images/banner.png')} />
      // </View>
      <View style={styles.bannerBox}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          dotStyle={{ backgroundColor: '#fff', width: 6, height: 6 }}
          activeDotStyle={{ backgroundColor: '#aaa', width: 6, height: 6 }}>
          <View style={styles.slide1}>
            <Text style={styles.text}>在线学习</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>在线培训</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>在线考试</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}
// const styles = StyleSheet.create({
//   bannerBox: {
//     position: 'relative',
//     height: 160,
//   },
//   img: {
//     borderRadius: 6,
//     width: '100%',
//     height: '100%',
//   },
//   text: {
//     position: 'absolute',
//     alignSelf: 'center',
//     top: 65,
//     zIndex: 2,
//     height: 30,
//     lineHeight: 30,
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });
const styles = StyleSheet.create({
  bannerBox: {
    position: 'relative',
    height: 160,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
