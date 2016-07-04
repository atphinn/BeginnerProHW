/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
  TouchableHighlight,
  Navigator
} from 'react-native';

import Registration from './Registration';
import Forgot from './Forgot';
import Browse from './Browse';

class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      "touched":"Login"
    }
  }

  linker(comp){
      this.props.navigator.push({
        component: comp
      });
}
  

  render() {
    const initialRoute = {
      component: Login
    }
    let message = "Login";
    let htmlMessage = <Text style={styles.typeC}>sign up</Text> 
    return (
      <Image source={require('./reg.png')} resizeMode='cover' style={styles.container}>
         <StatusBar barStyle="light-content"/>
         <Image source = {require('./logogreen.png')} style={styles.logo} />
        <Text style={styles.typeA}>
          BYOP
        </Text> 
         <Text style={styles.typeD}> Me@mail.com </Text>  
        <View style={{borderBottomColor: '#ffffff', borderBottomWidth: 1, width:350, }}>
               
        </View>  
         <Text style={styles.typeD}> *********** </Text>
        <View style={{borderBottomColor: '#ffffff', borderBottomWidth: 1, width:350, }}>
        
        </View>
        <Text style={styles.typeB}>forgot password?</Text> 

         <TouchableHighlight onPress={this.linker.bind(this, Registration)} underlayColor="transparent">
          <View style={styles.button}>
            <Text>{this.state.touched}</Text>
          </View>
        </TouchableHighlight>
        {htmlMessage}
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     height: null,
     width: null,
    backgroundColor: 'pink',
  },
  logo: {
    height: 100,
    width: 70,
    marginTop: 20,
  },
   typeA: {
     backgroundColor: 'transparent',
     color: 'white',
     fontWeight:  '900',
     fontSize: 33,
     marginTop: 10,
  },
  button: {
    backgroundColor:'rgb(78,227,196)',
    height: 60,
    width: 250,
    marginTop: 40,
    justifyContent:'center',
    alignItems: 'center',
  },
 typeB: {
     backgroundColor: 'transparent',
     color: 'white',
     marginTop: 20,
  },
  typeC: {
     backgroundColor: 'transparent',
     color: 'white',
     marginTop: 100,
     fontSize: 20,
  },
  typeD: {
     backgroundColor: 'transparent',
    color: 'white',
    marginTop: 50,
    marginLeft: -180,
    fontSize: 20,
    marginBottom: 10,
  },
});

module.exports = Login;