import React from 'react';
import { View, Text, Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import { Screen1 } from './components/navigation/Screen1.js';
import { Screen2 } from './components/navigation/Screen2.js';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'This is the HomeScreen',
    }
    render() {
        const navigate = this.props.navigation.navigate;
        return(
            <View>
                <Text>Welcome!</Text>
                <Button title= "Go to next screen" onPress={() => navigate('FirstScreen')} />
            </View>
        );
    }
}


const MainNavigator = createStackNavigator({
    Home: HomeScreen,   // shorthand when only have screen component
    FirstScreen: {screen: Screen1},
    SecondScreen: {screen: Screen2},
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {backgroundColor: '#f26f11'},
            headerTintColor: '#5851db',
            headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
        },
    }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
