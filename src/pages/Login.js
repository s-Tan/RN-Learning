import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import {Button, Toast, Provider} from '@ant-design/react-native';
import {asyncMobileLogin} from '../service/modules/user-service';
import md5 from 'md5';
class Login extends Component {
  static navigationOptions = {
    title: '登录',
  };
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      username: '160600028',
      password: '123',
      toastDuration: 1,
      logining: false,
      loginText: '登录',
    };
  }
  handleLogin() {
    if (!this.state.logining) {
      this.setState({
        logining: true,
        loginText: '登录中···',
      });
    } else {
      return;
    }
    if (!this.state.username) {
      Toast.info('职工号/学号', this.state.toastDuration);
      return;
    }
    if (!this.state.password) {
      Toast.info('请输入密码', this.state.toastDuration);
      return;
    }
    asyncMobileLogin({
      username: this.state.username,
      password: md5(this.state.password),
    }).then(({data}) => {
      console.log(data);
      this.setState({
        logining: false,
        loginText: '登录',
      });
      if (data.isSuccess) {
        this.setState({
          user: data.returnValue,
        });
        this.props.navigation.navigate('Home');
      } else {
        Toast.fail('登录失败', this.state.toastDuration);
      }
    });
  }
  render() {
    return (
      <View>
        <View style={styles.topBox}>
          <ImageBackground
            source={require('../images/app-login-bg.png')}
            style={styles.bg}>
            <Image
              style={styles.logo}
              source={require('../images/app-logo-white.png')}
            />
          </ImageBackground>
        </View>
        <View style={styles.formBox}>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={username => this.setState({username})}
              placeholder="职工号/学号"
              value={this.state.username}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={password => this.setState({password})}
              placeholder="密码"
              value={this.state.password}
            />
          </View>
          <Provider>
            <Button
              type="primary"
              style={styles.loginBtn}
              onPress={() => this.handleLogin()}>
              {this.state.loginText}
            </Button>
          </Provider>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBox: {
    height: 300,
  },
  bg: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 356,
    height: 58,
  },
  formBox: {
    padding: 30,
  },
  input: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    height: 50,
  },
  loginBtn: {
    marginTop: 40,
  },
});

export default Login;
