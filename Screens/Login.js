import React from 'react';
import {  View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions,Image } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation'; // Version can be specified in package.json
import { Ionicons } from '@expo/vector-icons';

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDTXF1NcfB9TKcVIX1hKMcGxsEvzFKMPzc",
  authDomain: "vivelau-f5660.firebaseapp.com",
  databaseURL: "https://vivelau-f5660.firebaseio.com",
  projectId: "vivelau-f5660",
  storageBucket: "vivelau-f5660.appspot.com",

};

firebase.initializeApp(firebaseConfig);
import {Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base';


export default class Login extends React.Component {
    //Se crea un constructor para los parametros del Login
    
    constructor(props){
        super(props)
        this.state=({
            email:'',
            password:''
        })
    }

    componentDidMount(){

        firebase.auth().onAuthStateChanged((user)=> {
            if(user !=null){
               alert("Se recomienda, registrarse con el correo proporcionado por la IES. Por ejemplo: persona@unaula.edu.co. Si es nuevo, debera proporcionar correo y contraseña, despues Botón 'Registro' ")
                console.log(user)
            }
        })
    }
    signUser = (email, password)=>{
        try{
            if(this.state.password.length<6){
                alert("Por favor ingresa 6 caracteres")
                //this.setState({ response: 'account created!'})
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email,password)
            //.createUserAndRetrieveDataWithEmailAndPassword(email,password)
            .then(()=> {
              //  this.state({error:'', loading:false});
                this.props.navigation.navigate('Home1');
            })
        }catch(error){
            console.log(error.toString())
        }

    }

    loginUser =(email, password)=>{
        try{
            firebase.auth().signInWithEmailAndPassword(email,password)
            .then(()=> {
                alert("¡Bienvenido! Gracias Por ser parte de este Gran Proyecto! :)")
                // this.state({error:'', loading:false});
                 this.props.navigation.navigate('Home1');
             })
        }catch(error){
            //alert("Bienvenido, Gracias por ser parte de este Proyecto!!")
            console.log(error.toString())
        }

    }

    async loginWithFacebook() {

        //ENTER YOUR APP ID 
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('167009680919244', { permissions: ['public_profile'] })
    
        if (type == 'success') {
    
          const credential = firebase.auth.FacebookAuthProvider.credential(token)
    
          firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
            console.log(error)
          })
        }
    }

    render() {
      return (
          <Container style={styles.Container}>
              <Form>
                  <Item floatingLabel>
                      <Label>Email</Label>
                      <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={(email) => this.setState({email})}
                      />
                  </Item>
                  <Item floatingLabel>
                      <Label>Password</Label>
                      <Input
                      secureTextEntry={true}
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={(password)=> this.setState({password})}
                      />
                  </Item>
                  <Button style={{marginTop:10, backgroundColor:"#5E0404"}}
                  full
                  rounded
                  success 
                  onPress={()=>this.loginUser(this.state.email, this.state.password)}
                   >
                      <Text style={{color:"#fff"}}>Login</Text>
                  </Button>
                  <Button style={{marginTop:10}}
                  full
                  rounded
                  light 
                  onPress={()=> this.signUser(this.state.email, this.state.password)}
                  >
                      <Text >Registro</Text>
                  </Button>
                  
                


              </Form>


          </Container>
      )
      }
  }
  /*<Button style={{marginTop:10}}
  full
  rounded
  primary 
  onPress={()=> this.loginWithFacebook()}
  >
      <Text >Sign with Facebook</Text>
  </Button>*/
  const styles =StyleSheet.create({
      Container:{
          flex:1,
          backgroundColor:'#fff',
          //alignItems:'center',
          justifyContent:'center',
          padding:10,
      },
  })