import React, { Component } from 'react';
import { ScrollView, Button, Text, View, Image } from 'react-native';
import ImageDemo from '../image/ImageDemo';
import Clock from '../clock/Clock';
import StyleDemo from '../style/StyleDemo';
import { StyleList } from '../../styles/StyleList';
import SizeDemo from '../size/SizeDemo';

class SpecialHeader extends React.Component {
    // note - overlay with ios native back button text
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Image style={{ height: 20, width: 20 }} source={require('../../assets/images/docbrown.jpg')} />
                <Text>This is Screen1</Text>
            </View>
        );
    }
}
class Screen1 extends Component {
    static navigationOptions = {
        headerTitle: <SpecialHeader />,     // note - headerTitle not title
    };
    render() {
        const { navigate } = this.props.navigation; // note alternative syntax cf. HomeScreen
        return (
            <ScrollView>
                <Clock />
                <Button title="Go to next screen" onPress={() => navigate('SecondScreen', { msg: 'Welcome to screen 2!' })} />
                <ImageDemo name="Doc Brown" />
                <StyleDemo style={StyleList} />
                <SizeDemo style={StyleList} />
            </ScrollView>
        );
    }
}

export { Screen1 };