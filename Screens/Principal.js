import { Ionicons } from '@expo/vector-icons';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Icon } from 'native-base';
import React from 'react';
import { Image, Linking, Text, View } from 'react-native';
import Slider from './Slider';

//Hay que Mejorar la alta redundancia en el código de esta clase 

export default class Principal extends React.Component {
  //Contiene el Logo del drawer y lo referente a la cabezera de la aplicación
  static navigationOptions = {
    
     headerTitle: 'UNAULA',
     headerLeft: <Ionicons name="ios-menu" onPress={() => navigation.openDrawer()}
     style={{ marginLeft: 15 }} size={32} color="#fff" />,
     drawerLabel: <Text  style = { { fontWeight : 'bold' } }>Inicio</Text>,
      drawerIcon : ({tintColor}) => (
    < Ionicons name="ios-home" size={32} color="black"/>
    )

  };
 
  render() {
    return (
      //Agrega la Imagen central de la pagina de Inicio, texto en el centro y la utilización
      // de un Layout para la distribucion de los logos sociales, con su determinada Ubicación
      
      <View style={{ flex: 1, alignItems: 'center' }}><Image source={{uri: 'http://3.bp.blogspot.com/-CkoNDevraVM/W9T857JVZBI/AAAAAAAAAHA/JwZbk2z_pw8srFSzP9CKrna0UqsOyowBgCK4BGAYYCw/s1600/Inicio.png'}}
      style={{width: 250, height: 220}} />

      <View style={{ flex: 1, }}>
      
        <Text style={{ flex: 1,fontStyle:'italic',fontSize: 22,  alignItems: 'center',
         justifyContent:'center', fontWeight:'bold', textAlign:'center', alignContent:'center' }}>
                Bienvenidos al Portal "Vive la U"
                  de la Universidad Autonoma Latinoamericana</Text>
        
        
        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', alignItems:'center'}} >
        
        <View style={{width: 70, height: 70}}>
        <Button  iconLeft transparent dark>
            <Icon name='logo-facebook' style={{fontSize:60, color:'#3b5998'}} 
            onPress={ ()=>{ Linking.openURL('http://www.facebook.com/pages/Universidad-Aut%C3%B3noma-Latinoamericana-UNAULA/167657469964636')}}/>
            <Text></Text>
          </Button>
        </View>

        <View style={{width: 70, height: 70}}>
        <Button  iconLeft transparent dark>
            <Icon name='logo-instagram' style={{fontSize:60}}
            onPress={ ()=>{ Linking.openURL('https://www.instagram.com/unaula_medellin/')}} />
            <Text></Text>
          </Button>
        </View>

        <View style={{width: 80, height: 70}}>
        <Button  iconLeft transparent >
            <Icon name='logo-youtube' style={{fontSize:60, color:'#cd201f'}} 
            onPress={ ()=>{ Linking.openURL('http://www.youtube.com/user/canalunaula')}} />
            
            <Text></Text>
          </Button>
        </View>

        <View style={{width: 70, height: 70}}>
        <Button  iconLeft transparent >
            <Icon name='logo-twitter' style={{fontSize:60, color:'#55acee'}}
            onPress={ ()=>{ Linking.openURL('https://twitter.com/Unaula')}} />
            <Text></Text>
          </Button>
        </View>
        </View>     
        </View>
      </View>
    );
  }
}


/*<View  style={{width: 50, height: 50}}><Button
          title="Ir a detalles"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
        /*    this.props.navigation.openDrawer();
          }}
        
          /></View>*/ 