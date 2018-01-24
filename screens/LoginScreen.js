import React, { Component } from 'react';
import { View, Text, StyleSheet , Button} from 'react-native';


class LoginScreen extends React.Component {
    render() {
        return (
        <View>
            <Text>This is login Screen</Text>
            <Button onPress={ () => this.props.navigation.navigate('HomeScreen') } title="Go to Home Screen"/>
        </View>
        );
    }
  }
export default LoginScreen;