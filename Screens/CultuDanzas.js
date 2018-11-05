import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Linking
} from 'react-native';
import Infoslider from 'react-native-infoslider'
import Slider from '../Slides1/DeporteSlider';
import {Thumbnail, Button, Icon} from 'native-base';
import {createTabNavigator, createBottomTabNavigator} from 'react-navigation';
export default class CultuDanzas extends React.Component {
  
  static navigationOptions = {
    
    headerTitle: 'Cultura',
  }
  render() {
    return (
        <View style={{  alignItems: 'center' }}>
    <Text></Text>
    <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-between', alignItems:'center'}} >
    <Text style={styles.welcome}>
                Teatro</Text>
                <Image source={require('../assets/Img/Danzas4.jpg')}
      style={{width: 320, height: 190}} /> 

      
      
      <Text style={{fontStyle:'italic',fontSize: 15,  alignItems: 'stretch',
         justifyContent:'center', textAlign:'justify', alignContent:'center' }}>
               El área cultural desarrolla parte de sus actividades en el edificio
                de música y danzas, donde anteriormente operaba la biblioteca;actualmente se dictan allí 
                clases de: guitarra, técnica vocal, percusión, piano y danzas folclóricas. </Text>
               
  <View style={{flex:1}}>             
<Button  iconLeft transparent style={styles.btnDeporte }
onPress={ ()=>{ Linking.openURL('http://www.unaula.edu.co/dependencias/bienestar/danza')}} >
    <Icon name='ios-link' style={{fontSize:48}} />
            <Text>Quiero ser Parte!</Text>
  </Button>
</View>
      
</View>
      
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
  
  btnDeporte: {
    height:70, 
    borderWidth:2,
    borderColor:'#5e0404',
    //backgroundColor:'#0b5345'
  },
});

