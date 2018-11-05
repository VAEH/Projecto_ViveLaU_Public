import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Infoslider from 'react-native-infoslider'
import Slider from './Slider';
import {Thumbnail, Button,Icon} from 'native-base';
export default class Settings extends React.Component {
  
  static navigationOptions = {
    
    headerTitle: 'BIENESTAR',
  }
  render() {
    return (
      
    <View style={{  alignItems: 'center' }}>
    
   <View >
     
      <Text></Text>
    <Text style={styles.welcome}>
                Bienestar Universitario</Text>   
    
    <View style={{height:150}}><Text><Text></Text></Text><Slider/></View>

    <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', alignItems:'center'}}>
    <View style={{justifyContent:'center'}}>
    <Button  iconLeft transparent style={styles.btnDanza}
    onPress={() => this.props.navigation.navigate('Danzas')}
    >
            <Icon name='ios-musical-notes' style={styles.icon}
             />
            <Text style={styles.textbtn}>   Cultura    </Text>
          </Button>
      </View>
      <View style={{justifyContent:'center'}}>

        <Button  iconLeft transparent style={styles.btnDeporte}
        onPress={() => this.props.navigation.navigate('Deporte')} >
            <Icon name='md-basketball' style={styles.icon}/>
            <Text style={styles.textbtn}>   Deportes    </Text>
          </Button>
    </View>
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
  btnDeporte: {
    height:70, 
    borderWidth:1,
    borderColor:'#5e0404',
    backgroundColor:'#0b5345'
  },
  btnDanza:{
    
    height:70, 
    borderWidth:1,
    borderColor:'#5e0404', 
    backgroundColor:'#154360'
  },
  icon:{
    fontSize:60, 
    color:'#fff',
  },
  textbtn:{
    color:'#fff'
  }
});

