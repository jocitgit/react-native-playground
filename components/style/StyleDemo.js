import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const localStyle = StyleSheet.create({
    red: {
        color: 'red',
      },
    }
);

class StyleDemo extends React.Component {

    render() {
        const topStyle = this.props.style;
        return (
            <View style={topStyle.bgYellow}>
                <Text style={localStyle.red}>Hello!</Text>
                <Text style={topStyle.txtBigBold}>Hello again!</Text>
                <Text style={[topStyle.txtBigBold, localStyle.red]}>Goodbye!</Text>
            </View>
        );
    }
}

export default StyleDemo;