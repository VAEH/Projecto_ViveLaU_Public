import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Ionicons } from '@expo/vector-icons';
import Principal from './Screens/Principal'
const RootStack = createStackNavigator(
    {
      Home: Principal
     // Details: DetailsScreen,
    },
    {//Parametros de la configuración de la cabecera principal 
      initialRouteName: 'Home',
      /* The header config from HomeScreen is now here */
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#5e0404',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
  );

   const DrawerNavigator = createDrawerNavigator({
        Principal: {screen: RootStack},
        //Settings:{screen : SettingsScreen}
      
}); export default DrawerNavigator;