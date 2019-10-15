import React from 'react';
import {
  View,
  Text
} from 'react-native';

class Clock extends React.Component {

    state = { date: new Date() };

    tick() {
      this.setState(
        { date: new Date() }
      );
    }
  
    componentDidMount() {
      this.timerId = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    render() {
      return (
        <View>
          <Text>The time is {this.state.date.toLocaleTimeString()}</Text>
        </View>
      );
    }
  }

  export default Clock;
  