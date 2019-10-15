import React, { Component } from 'react';
import { ScrollView, Button } from 'react-native';
import ImageDemo from '../image/ImageDemo';
import Clock from '../clock/Clock';
import StyleDemo from '../style/StyleDemo';
import { StyleList } from '../../styles/StyleList';
import SizeDemo from '../size/SizeDemo';

class Screen1 extends Component {
    static navigationOptions = {
        title: 'This is Screen1'
    }
    render() {
        const {navigate} = this.props.navigation; // note alternative syntax cf. HomeScreen
        return (
            <ScrollView>
                <Clock />
                <Button title= "Go to next screen" onPress={() => navigate('SecondScreen', {msg: 'Welcome to screen 2!'})} />
                <ImageDemo name="Doc Brown" />
                <StyleDemo style={StyleList} />
                <SizeDemo style={StyleList} />
            </ScrollView>
        );
    }
}

export { Screen1 };