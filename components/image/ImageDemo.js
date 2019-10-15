import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import docbrown from '../../assets/images/docbrown.jpg';

class ImageDemo extends React.Component {
    render() {
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text>Hello, {this.props.name}!</Text>
                <Image source={docbrown} alt="doc brown" />
            </View>
        );
    }
}

export default ImageDemo;
