import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Screen2 extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => { // use function to extract navigation, navigationOptions, screenProps
        const firstTime = (navigation.getParam('counter', 0) === 0);
        const title = 'This is Screen2' + (firstTime ? '' : ' again');
        if (firstTime) {
            return { title: title }; // use default navigation styling
        }
        return {
            title: title,
            headerStyle: { backgroundColor: navigationOptions.headerTintColor }, // override default with another value from navigationOptions
            headerTintColor: 'white',
        };
    };

    render() {
        const nav = this.props.navigation;
        const counter = nav.getParam('counter', 0);
        return (
            <View>
                <Text>Message: {nav.getParam('msg', "")}</Text>
                <Button title="Load this screen again" onPress={() => nav.push('SecondScreen', { msg: 'Welcome to screen 2 again!', counter: (counter + 1) })} />
                <Button title="Go to home screen" onPress={() => nav.navigate('Home')} />
                <Button title="Go back" onPress={() => nav.goBack()} />
                <Button title="Go to first screen in stack" onPress={() => nav.popToTop()} />
                <Button title="Reset the counter param" onPress={() => nav.setParams({ counter: 0 })} />
                <Button title="Go to next screen" onPress={() => nav.navigate('ThirdScreen')} />
                <Text>Screen added {counter} times</Text>
            </View>
        );
    }
}

export { Screen2 };