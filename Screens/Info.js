import { Ionicons } from '@expo/vector-icons';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Icon } from 'native-base';
import React from 'react';
import { Image, Linking, Text, View, StyleSheet } from 'react-native';


//Hay que Mejorar la alta redundancia en el código de esta clase 

export default class Informacion extends React.Component {
  //Contiene el Logo del drawer y lo referente a la cabezera de la aplicación
  static navigationOptions = {
    
     headerTitle: 'Informacion',
    

  };
 
  render() {
    return (
      //Agrega la Imagen central de la pagina de Inicio, texto en el centro y la utilización
      // de un Layout para la distribucion de los logos sociales, con su determinada Ubicación
      
      <View style={{ flex: 1, alignItems: 'center' }}>
        
                <Image source={{uri: 'https://3.bp.blogspot.com/-zl8Zezzntz8/W-I9KFrz5WI/AAAAAAAAAI4/6dPMs9QnDsoIKpMFP2D6eU-copO7B5KAACLcBGAs/s1600/LogoUna1.png'}}
      style={{width: 370, height: 150}} />

      <View style={{ justifyContent:'space-between', alignItems:'center'}}>
          <Text style={{fontStyle:'italic',
      color:'#000000',
      fontSize: 20,
      alignItems:'center',
      justifyContent:'center',
      fontWeight:'bold',}}>Desarrollado Por:</Text>
      <View style={{ justifyContent:'space-between', alignItems:'center'}} >
      <Text >Víctor Echavarría</Text>
      <Text>victor.echavarria8909@unaula.edu.co</Text>
      <Text>Estudiante Ingenieria Informatica</Text>
      <Text>      </Text>
      </View>
      <View style={{ justifyContent:'space-between', alignItems:'center'}}>
          <Text>   </Text>
          <Text>Oscar Júlian Galeano</Text>
          <Text>oscar.galeanoec@unaula.edu.co</Text>
          <Text>Docente Ingenieria Informatica</Text>
          <Text>    </Text>
      </View>

      <View style={{ justifyContent:'space-between', alignItems:'center'}}>
      <Text>   </Text>
      <Text stye={styles.welcome}> Universidad Autónoma Latinoamricana</Text>
      <Text stye={styles.welcome}>  Facultad de Ingenierias</Text>
      <Text stye={styles.welcome}> Versión: 1.2</Text>
      
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
      color: '#000000',
      fontSize: 20,
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
  