import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Infoslider from 'react-native-infoslider'
import Slider from '../Slides1/DeporteSlider';
import {Thumbnail, Button, Icon} from 'native-base';
import {createTabNavigator, createBottomTabNavigator} from 'react-navigation';
export default class Futbol extends React.Component {
  
  static navigationOptions = {
    
    headerTitle: 'Futbol',
  }
  render() {
    return (
        <View>
    <Text>Futbol</Text>
    </View>   
    );
    
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    //flex:2,
    fontStyle:'italic',
    color:'#5E0404',
    fontSize: 30,
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
   // textAlign:'center',
    //alignContent:'center',
    //textAlign: 'center',
    //margin: 10,
    //backgroundColor:'#5e0404'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

