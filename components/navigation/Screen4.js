import React, { Component } from 'react';
import { FlatList, SectionList, View, Text, Image, Button } from 'react-native';
import { red } from 'ansi-colors';

class Screen4 extends Component {
    static navigationOptions = { title: 'This is Screen4' };

    render() {
        const nav = this.props.navigation;
        const demoData = [
            { name: 'Emmet Brown', photo: require('../../assets/images/docbrown.jpg') },
            { name: 'Jack Sparrow', photo: require('../../assets/images/jack_sparrow.jpeg') },
            { name: 'Indiana Jones', photo: require('../../assets/images/indiana.jpeg') }
        ];
        const sectionData = [
            { title: 'Dog sounds', data: ['bark', 'woof', 'growl'] },
            { title: 'Cat sounds', data: ['miaow', 'purr'] }
        ];

        return (
            <View>
                <Text style={{ fontSize: 18 }}>FlatList demo:</Text>
                <FlatList data={demoData}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={{ width: 150, color: 'purple' }}>{item.name}</Text>
                            <Image source={item.photo} style={{ height: 20, width: 20 }} />
                        </View>
                    }
                    keyExtractor={(item) => item.name}
                />
                <Text style={{ fontSize: 18 }}>SectionList demo:</Text>
                <SectionList sections={sectionData}
                    renderItem={({ item }) => <Text style={{ color: 'green' }}>{item}</Text>}
                    renderSectionHeader={({ section }) => <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
                <Button title="Go to next screen" onPress={() => nav.navigate('FifthScreen')} />
            </View>
        );
    }
}

export { Screen4 };