import React from 'react';
import { StyleSheet, Image, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'
import HomeScreenTabNavigator from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { DrawerNavigator } from 'react-navigation';
import Settings from './screens/SettingsScreen';
import { Icon, Body, Container, Header, Content } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}


// const AppNavigator = StackNavigator({
//   LoginScreen: { screen : LoginScreen },
//   HomeScreen: { screen : HomeScreenTabNavigator },
// });

const AppDrawerNavigator = DrawerNavigator({
  LoginScreen: { screen: LoginScreen },
  HomeScreen: { screen: HomeScreenTabNavigator },
  Settings: { screen: Settings },
}, {
    initialRouteName: 'HomeScreen',
    contentComponent: CustomDrawerContentComponent,
    draweOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header>
      <Body>
        <Text>ytftyfv</Text>
      </Body>
    </Header>
  </Container>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7FFFD4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  }
});
