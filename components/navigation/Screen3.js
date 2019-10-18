import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Button, TextInput, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

class Screen3 extends Component {

    static navigationOptions = { title: 'This is Screen3' };

    constructor(props) {
        super(props);
        this.state = { text: '', disableButton: true, touchText: '' };
    }

    validateText(inputText) {
        // Do not use toUpperCase/toLowerCase without implementing bugfix!
        this.setState({ text: inputText });
        this.setState({ disableButton: (inputText.length < 5) })
    }

    touchButton(i) {
        this.setState({ touchText: 'press ' + i });
    }

    longTouchButton(i) {
        this.setState({ touchText: 'long press ' + i });
    }

    render() {
        const nav = this.props.navigation;
        return (
            <View style={{ flex: 1, margin: 20 }}>
                <TextInput placeholder="Enter text here"
                    onChangeText={(inputText) => this.validateText(inputText)}
                    value={this.state.text} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Button
                        title='Small'
                        color='#841584'
                        disabled={this.state.disableButton}
                        onPress={() => alert('you clicked small')}
                    />
                    <Button
                        title='Biggerrrrrrrrrr'
                        color='#841584'
                        disabled={!this.state.disableButton}
                        onPress={() => alert('you clicked big')}
                    />
                </View>
                <Text>Touchable demo: {this.state.touchText}</Text>
                <View>
                    <TouchableHighlight style={styles.touchable} onPress={() => this.touchButton('1a')} underlayColor='red'>
                        <Text>TouchableHighlight 1a</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.touchable} onPress={() => this.touchButton('1b')} onLongPress={() => this.longTouchButton('1b')} underlayColor='red'>
                        <Text>TouchableHighlight with LongPress 1b</Text>
                    </TouchableHighlight>
                    <TouchableNativeFeedback onPress={() => this.touchButton('2')} background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                        <View style={styles.touchable}>
                            <Text>TouchableNativeFeedback (Android) 2</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableOpacity onPress={() => this.touchButton('3')}>
                        <View style={styles.touchable}>
                            <Text>TouchableOpacity 3</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableWithoutFeedback onPress={() => this.touchButton('4')}>
                        <View style={styles.touchable}>
                            <Text>TouchableWithoutFeedback 4</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <Text>ViewPager demo:</Text>
                <ViewPager style={{ flex: 1 }} initialPage={0}>
                    <View key="1" style={{ backgroundColor: '#ffff00' }}>
                        <Text>View page 1</Text>
                    </View>
                    <View key="2" style={{ backgroundColor: '#ff00ff' }}>
                        <Text>View page 2</Text>
                    </View>
                    <View key="3" style={{ backgroundColor: '#00ffff' }}>
                        <Text>View page 3</Text>
                    </View>
                </ViewPager>
                <Button title="Go to next screen" onPress={() => nav.navigate('FourthScreen')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    touchable: {
        backgroundColor: 'skyblue',
        alignItems: 'center',
        marginBottom: 10
    }
});

export { Screen3 };