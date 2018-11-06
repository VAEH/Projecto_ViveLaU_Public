import React from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions,Image } from 'react-native';
import { createStackNavigator,  createBottomTabNavigator, createTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation'; // Version can be specified in package.json
import { Ionicons } from '@expo/vector-icons';
import Principal from './Screens/Principal'
import Settings from './Screens/Settings';
import Slider from './Screens/Slider';
import Login from './Screens/Login';
import Deportes from './Screens/Deportes';
import Taekwondo from './Screens/Taekwondo';
import Futbol from './Screens/Futbol';
import Danzas from './Screens/Danzas';
//import QRCodeScanner from 'react-native-qrcode-scanner';
import {Icon } from 'native-base';
import CultuDanzas from './Screens/CultuDanzas';
import CameraExample from './Screens/Camera';
import {createMaterialBottomTabNavigator, barStyle, paddingBottom} from 'react-navigation-material-bottom-tabs'
//import TabScreens from './Screens/Deportes';

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDTXF1NcfB9TKcVIX1hKMcGxsEvzFKMPzc",
  authDomain: "vivelau-f5660.firebaseapp.com",
  databaseURL: "https://vivelau-f5660.firebaseio.com",
  projectId: "vivelau-f5660",
  storageBucket: "vivelau-f5660.appspot.com",

};

// Se encarga de la división de la parte superior del menu
const CustomDrawerComponent = (props)=>(
  <SafeAreaView style={{flex:1}}>
    <View style={{height:150, backgroundColor:'#5E0404', alignItems:'center',
  justifyContent:'center'}}>
    <Image source={require('./assets/Img/LogoUnaula.png')}   style={{height:150, width:150,
      borderRadius:150}}/> 
    </View>
    <ScrollView>
       <DrawerItems {...props}/>
    </ScrollView>
    
  </SafeAreaView>
)
//Crea la parte superior de la aplicacion "Header", No se utiliza este Stack
const RootStack = createStackNavigator(
  {
    /*Login:{
       screen:Login
    },*/
  
    Home: Principal,
   // Details: DetailsScreen,
  },
  {//Parametros de la configuración de la cabecera principal 
   // initialRouteName: 'Deporte',
   disabledBackGesture: 'Login',
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

//Crea lo referente al Login, Tampoco se utiliza este stack
const RootStack3 = createStackNavigator(
  {
    Login:{
       screen:Login
    },
    
    //Inicio1: Login,
  
   // Details: DetailsScreen,
  },
  {//Parametros de la configuración de la cabecera principal 
    //initialRouteName: 'Inicio1',
    
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
//Desde aqui hacia abajo, ha exepción del Drawer se utilizan
//Maneja lo referente al Tab Navigator de las Pantallas de Deportes 
const TabScreens = createMaterialBottomTabNavigator({
    Deportes: { screen: Deportes,
    navigationOptions:{
      tabBarlabel:'Deportes',
      tabBarIcon : ({tintColor})=>(
       <Icon name="ios-walk"  style={{fontSize:24, color:'#fff'}}/>

      )

    }
    },
    Taekwondo:{screen:Taekwondo,
      navigationOptions:{
        tabBarlabel:'Taekwondo',
        tabBarIcon : ({tintColor})=>(
         <Icon name="ios-heart" style={{fontSize:24, color:'#fff'}}/>
  
        )
  
      }
    },
   
},{
  navigationOptions:{
    barStyle: { backgroundColor: '#5e0404' },
    //activeColor:'black'
    
  },
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
    
    //inactiveColor:'white'
    //activeBackgroundColor:'#black'
    
  },
},

);
//Controla el Tabnavigation de la pantalla principal

const TabInicio = createMaterialBottomTabNavigator({
  Inicio: { screen: Principal,
    backgroundColor:'5e0404',
  navigationOptions:{
    tabBarlabel:'Inicio',
    tabBarIcon : ({tintColor})=>(
     <Icon name="ios-home"  style={{fontSize:26, color:'#fff'}}/>

    )

  }
  },
  Bienestar:{screen:Settings,
    navigationOptions:{
      tabBarlabel:'Bienestar',
      tabBarIcon : ({tintColor})=>(
       <Icon name="ios-people" style={{fontSize:26, color:'#fff'}}/>

      )

    }
  },Ubicación: { screen: CameraExample,
    backgroundColor:'5e0404',
  navigationOptions:{
    tabBarlabel:'Ubicación',
    tabBarIcon : ({tintColor})=>(
     <Icon name="ios-qr-scanner"  style={{fontSize:26, color:'#fff'}}/>

    )

  }
  },
  
 
},{
navigationOptions:{
  barStyle: { backgroundColor: '#5e0404' },
  //activeColor:'black'
  swipeEnabled:true
},
tabBarOptions: {
  activeTintColor: 'black',
  inactiveTintColor: 'gray',
  
  
  //inactiveColor:'white'
  //activeBackgroundColor:'#black'
  
},
},

);
//tabNavigator del Area cultural 
const TabDanzas = createMaterialBottomTabNavigator({
  Cultura: { screen: Danzas,
  navigationOptions:{
    tabBarlabel:'Cultura',
    tabBarIcon : ({tintColor})=>(
     <Icon name="ios-happy"  style={{fontSize:24, color:'#fff'}}/>

    )

  }
  },
  Teatro:{screen:CultuDanzas,
    navigationOptions:{
      tabBarlabel:'Taekwondo',
      tabBarIcon : ({tintColor})=>(
       <Icon name="ios-eye" style={{fontSize:24, color:'#fff'}}/>

      )

    }
  },
 
},{
navigationOptions:{
  barStyle: { backgroundColor: '#5e0404' },
  activeColor:'white',
  //activeTintColor: 'black',

  //activeColor:'black'
  
},
tabBarOptions: {
  //activeColor:'black',
  activeTintColor: 'black',
  inactiveTintColor: 'gray',
  
  //inactiveColor:'white'
  //activeBackgroundColor:'#black'
  
},
},

);

//Controla El StackNavigator de todas las pantallas, en la cual, ha exepción de login. Llama las del tabNavigation
const RootStack1 = createStackNavigator(
  {
    
    Inicio: Login,
    Home1: {screen:TabInicio,
    },
    Deporte:TabScreens,
    Danzas:TabDanzas,
    
   // Details: DetailsScreen,
  },
  {//Parametros de la configuración de la cabecera principal 
    //initialRouteName: 'Home1',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#5e0404',
      },
      title:'UNAULA',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);


//Crea el menu de navegación, en el momento no se utiliza, solo es prueba
const  DrawerNatigation = createDrawerNavigator({
  Inicio: {screen: Principal},
  Bienestar: {screen: Settings},
  
  //Settings:{screen : SettingsScreen}
},
{
  contentComponent:CustomDrawerComponent ,
 // drawerWidth:width,
  contentOptions:{
    activeTintColor:'#5e0404',
    
  }
});
//Se esta llamando o mostrando el componente RootStack1, el cual contiene lo del StackNavigator
export default class App extends React.Component {
  render() {
    return(  
    //  <RootStack3/>
    <RootStack1/>
   //<CameraExample />
    //<QRCodeScanner
    //<DrawerNatigation />
    //<RootStack/>
    
    )
        }
}
