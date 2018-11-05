import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import { Title } from 'native-base';

export default class App extends Component {
  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    Alert.alert(
      'Espero se ha de tu ayuda!',
      JSON.stringify(data)
    );
  };

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-between', alignItems:'center',backgroundColor: '#ecf0f1'}}> 
        <Text style={styles.welcome}>
                Scan Unaula</Text>
                <View >
                <Text style={{justifyContent:'center'}}>
                Escanea el codigo QR, incorporado en la entrada de la Zona Universitaria.
                Encontraras información y ubicación de tu utilidad</Text>
                </View>
                <View >
                <Text style={ styles.instructions}>
               Gracias por ser Parte de este Gran Proyecto!</Text>
                </View>
      <View style={styles.container}>
      
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 200, width: 200 }}
            />
        }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
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
    //flex:1,
    //fontStyle:'',
    color:'#5E0404',
    fontSize: 18,
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
  },
  
  btnDeporte: {
    height:70, 
    borderWidth:2,
    borderColor:'#5e0404',
    //backgroundColor:'#0b5345'
  },
});