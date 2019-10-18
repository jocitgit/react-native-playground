import React, { Component } from 'react';
import { KeyboardAvoidingView, ScrollView, View, Text, Button, FlatList, TextInput } from 'react-native';

class Screen5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            customerDetail: {},
            debug: '',
            bgColor: 'yellow',
            newCustomer: { firstName: '', lastName: '' }
        };
    }
    static navigationOptions = { title: 'This is Screen5' };

    //    getCustomers() { // Alternative 1
    //         fetch('http://10.0.2.2:3000/customer')
    //            .then((response) => response.json())
    //            .then((responseJson) => {
    //              this.setState({customers: responseJson.data});
    //            })
    //            .catch((error) => {
    //              console.error(error);
    //            });
    //    }

    async getCustomersAsync() { // Alternative 2
        try {
            let response = await fetch(
                'http://10.0.2.2:3000/customer',
            );
            let responseJson = await response.json();
            this.setState({ customers: responseJson.data });
        } catch (error) {
            console.error(error);
        }
    }

    async getCustomerDetailsAsync(id) {
        try {
            let url = 'http://10.0.2.2:3000/customer?id=' + id;
            let response = await fetch(url);
            let responseJson = await response.json();
            this.setState({ debug: JSON.stringify(responseJson) });
            this.setState({ customerDetail: (responseJson.data.length > 0) ? responseJson.data[0] : {} });
        } catch (error) {
            console.error(error);
        }
    }

    async addCustomerAsync() {
        const bodyJson = this.state.newCustomer;
        try {
            let url = 'http://10.0.2.2:3000/customer';
            let response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyJson)
            });
            // response error handling here
            let responseJson = await response.json();
            this.setState({ debug: JSON.stringify(responseJson) });
            if (response.ok) {
                this.setState({ newCustomer: { firstName: '', lastName: '' } });
                this.getCustomersAsync();
            }
        } catch (error) {
            console.error(error);
        }
    }

    async updateCustomerAsync() {
        const bodyJson = this.state.customerDetail;
        try {
            let url = 'http://10.0.2.2:3000/customer';
            let response = await fetch(url, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyJson)
            });
            // response error handling here
            let responseJson = await response.json();
            this.setState({ debug: JSON.stringify(responseJson) });
            if (response.ok) {
                this.getCustomersAsync();
            }
        } catch (error) {
            console.error(error);
        }
    }

    async deleteCustomerAsync(id) {
        try {
            let url = 'http://10.0.2.2:3000/customer?id=' + id;
            let response = await fetch(url, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: ''
            });
            // response error handling here
            let responseJson = await response.json();
            this.setState({ debug: JSON.stringify(responseJson) });
            if (response.ok) {
                this.getCustomersAsync();
            }
        } catch (error) {
            console.error(error);
        }
    }


    render() {

        return (
            <ScrollView>
                <Button title="Get Customers" onPress={() => this.getCustomersAsync()} />
                <Text style={{ fontSize: 18 }}>Customer Count: {this.state.customers.length}</Text>
                <FlatList data={this.state.customers}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: (this.state.customerDetail._id === item._id ? this.state.bgColor : 'white') }}>
                            <Text style={{ width: 100, color: 'purple' }}>{item.firstName}</Text>
                            <Text style={{ width: 100, color: 'purple' }}>{item.lastName}</Text>
                            <Button title="Show Details" onPress={() => this.getCustomerDetailsAsync(item._id)} />
                            <Button title="Delete" onPress={() => this.deleteCustomerAsync(item._id)} />
                        </View>
                    }
                    keyExtractor={(item) => item._id}
                />

                <Text style={{ fontSize: 18 }}>Selected Customer Details:</Text>
                <Text>Id: {this.state.customerDetail._id}</Text>
                <Text>First Name:</Text>
                <TextInput style={{ height: 40, borderWidth: 1 }}
                    onChangeText={(text) => this.setState(
                        {
                            customerDetail:
                            {
                                _id: this.state.customerDetail._id,
                                firstName: text,
                                lastName: this.state.customerDetail.lastName
                            }
                        })
                    }
                    value={this.state.customerDetail.firstName}
                />
                <Text>Last Name:</Text>
                <TextInput style={{ height: 40, borderWidth: 1 }}
                    onChangeText={(text) => this.setState(
                        {
                            customerDetail:
                            {
                                _id: this.state.customerDetail._id,
                                firstName: this.state.customerDetail.firstName,
                                lastName: text
                            }
                        })
                    }
                    value={this.state.customerDetail.lastName}
                />
                <Button title="Update Customer" onPress={() => this.updateCustomerAsync()} />
                <KeyboardAvoidingView style={{ backgroundColor: '#f2b05a' }} behaviour='padding'>
                    <Text style={{ fontSize: 18 }}>Add Customer:</Text>
                    <View>
                        <Text>First Name</Text>
                        <TextInput style={{ height: 40, borderColor: (this.state.newCustomer.firstName.length > 0) ? 'gray' : 'red', borderWidth: 1 }} placeholder="Enter first name"
                            onChangeText={(text) => this.setState({ newCustomer: { firstName: text, lastName: this.state.newCustomer.lastName } })}
                            value={this.state.newCustomer.firstName}
                        />
                    </View>
                    <View>
                        <Text>Last Name</Text>
                        <TextInput style={{ height: 40, borderColor: (this.state.newCustomer.lastName.length > 0) ? 'gray' : 'red', borderWidth: 1 }} placeholder="Enter last name"
                            onChangeText={(text) => this.setState({ newCustomer: { firstName: this.state.newCustomer.firstName, lastName: text } })}
                            value={this.state.newCustomer.lastName}
                        />
                    </View>
                    <Button title="Add Customer" onPress={() => this.addCustomerAsync()} />
                </KeyboardAvoidingView>
                <Text>Debug info: {this.state.debug}</Text>

            </ScrollView>
        );
    }
}

export { Screen5 };