import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Banner, NoticeBar, Apps} from '../components/index';

class Home extends Component {
  // static navigationOptions = {
  //   title: 'home',
  // };
  componentDidMount() {
    console.log(this.props.navigation.state);
  }

  render() {
    return (
      <View style={styles.home}>
        <Banner />
        <NoticeBar text={1111} navigation={this.props.navigation} />
        <Apps navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    padding: 10,
  },
});
export default Home;
