import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import ProfileScreen from './Profile';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
import Settings from './SettingsScreen';

class HomeScreen extends React.Component {
    static navigationOptions = {
        drawerIcon:(
            <Image 
            source={require('../assets/splash.jpg')} 
            style={{height: 24, width: 24}} />
        )
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name="ios-menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text>This is Home Screen</Text>
                </Content>
            </Container>
        );
    }
}

class Notifications extends React.Component {
    render() {
        return (
            <View>
                <Text>This is Notification Screen</Text>
            </View>
        );
    }
}

const HomeScreenTabNavigator = TabNavigator({
    HomeScreen: { screen: HomeScreen },
    Notification: { screen: Notifications },
    Profile: { screen: ProfileScreen }
}, {
        animationnable: true
    });

export default HomeScreenTabNavigator;