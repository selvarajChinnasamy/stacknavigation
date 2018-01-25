import React from 'react';
import { StyleSheet, Image, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/Profile';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
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
  HomeScreen: { screen: HomeScreen },
  Settings: { screen: Settings },
}, {
    contentComponent: props =>
      <View >
        <View style={{ alignItems: 'center', }}>
          <Image
            style={styles.drawerImage}
            source={require('./assets/splash.jpg')} />
        </View>
        <DrawerItems {...props} />
      </View>
  });


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
