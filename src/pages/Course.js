import React, {Component} from 'react';
import {View} from 'react-native';
import {DatePicker, List, Provider} from '@ant-design/react-native';

class Message extends Component {
  static navigationOptions = {
    title: '我的课表',
  };
  constructor(props) {
    super(props);
    this.onChange = value => {
      this.setState({value});
    };
    this.state = {
      value: undefined,
    };
  }
  render() {
    return (
      <View>
        <Provider>
          <View>
            <List>
              <DatePicker
                value={this.state.value}
                mode="date"
                defaultDate={new Date()}
                minDate={new Date(2015, 7, 6)}
                maxDate={new Date(2026, 11, 3)}
                onChange={this.onChange}
                format="YYYY-MM-DD">
                <List.Item>Select Date</List.Item>
              </DatePicker>
            </List>
          </View>
        </Provider>
      </View>
    );
  }
}

export default Message;
