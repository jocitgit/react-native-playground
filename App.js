import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Screen1 } from './components/navigation/Screen1.js';
import { Screen2 } from './components/navigation/Screen2.js';
import { Screen3 } from './components/navigation/Screen3.js';
import { Screen4 } from './components/navigation/Screen4.js';
import { Screen5 } from './components/navigation/Screen5.js';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'This is the HomeScreen',
    }
    render() {
        const navigate = this.props.navigation.navigate;
        return (
            <View>
                <Text>Welcome!</Text>
                <Button title="Go to next screen" onPress={() => navigate('FirstScreen')} />
                <Button title="Go to screen5" onPress={() => navigate('FifthScreen')} />
            </View>
        );
    }
}

const MainNavigator = createStackNavigator({
    Home: HomeScreen,   // shorthand when only have screen component
    FirstScreen: { screen: Screen1 },
    SecondScreen: { screen: Screen2 },
    ThirdScreen: Screen3,
    FourthScreen: Screen4,
    FifthScreen: Screen5,
},
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: { backgroundColor: '#f26f11' },
            headerTintColor: '#5851db',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
        },
    }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
