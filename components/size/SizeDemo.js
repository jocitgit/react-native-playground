import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class SizeDemo extends React.Component {

    render() {
        const topStyle = this.props.style;
        return (
            <View>
                <View>
                    <View style={[topStyle.bgBlue, { width: 50, height: 50 }]} />
                    <View style={[topStyle.bgGreen, { width: 100, height: 100 }]} />
                    <View style={[topStyle.bgYellow, { width: 150, height: 150 }]} />
                </View>
                <View style={{height: 200}}> 
                    <View style={[topStyle.bgBlue, { flex: 1 }]} />
                    <View style={[topStyle.bgGreen, { flex: 2 }]} />
                    <View style={[topStyle.bgYellow, { flex: 3 }]} />
                </View>
            </View>
        );
    }
}

export default SizeDemo;