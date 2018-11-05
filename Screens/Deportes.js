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

export default class Deportes extends React.Component {
  
  static navigationOptions = {
    
    headerTitle: 'Deportes',
  }
  render() {
    return (
        <View>
    <View style={{  alignItems: 'center', justifyContent: 'space-between' }}>
    
   
    <View>
      <Text></Text>
    <Text style={styles.welcome}>
                                                     Área Lúdico Deportiva</Text>   
    <Text>


    </Text>
    <View style={{ flexDirection: 'column',justifyContent: 'space-between', alignItems:'center'}}>
      <View style={{height:150, width:310}}><Text><Text></Text></Text><Slider/>
      <Text><Text></Text></Text><Text><Text></Text></Text>
      </View>
      
      <Text style={{ flex: 1,fontStyle:'italic',fontSize: 16,  alignItems: 'stretch',
         justifyContent:'center', fontWeight:'bold', textAlign:'justify', alignContent:'center' }}>
               El área lúdico deportiva realiza actividades que motivan y desarrollan la actividad 
               física y mental de la comunidad universitaria, a través del juego o la competencia,
                generando espacios de ambiente saludable que propicien la formación integral. </Text>
      

      </View>
      <View style={{ flexDirection: 'column',justifyContent: 'space-between', alignItems:'center'}}>
      
      </View>
      </View>   
    </View> 
    </View> 
    

    );
    
  }
}//



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

