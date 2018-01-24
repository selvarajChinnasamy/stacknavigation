import React, { Component } from 'react';
import { View,Image, Text, StyleSheet , Button} from 'react-native';


class LoginScreen extends React.Component {
    static navigationOptions = {
        drawerIcon:(
            <Image 
            source={require('../assets/splash.jpg')} 
            style={{height: 24, width: 24}} />
        )
    }
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