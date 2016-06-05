/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
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

import NavigationBar from 'react-native-navbar';

class Registration extends Component {

  render() {
    let titleConfig = <View><Text>Registration</Text></View>

    return (
      <Image source={require('./reg.png')} resizeMode='cover' style={styles.container}>
      <Text style={styles.subheader}>Username</Text> 
      <Text style={styles.textA}>iceman</Text> 
        <View style={{borderBottomColor: '#ffffff', borderBottomWidth: 1, width:350, }}>
        </View>
        <Text style={styles.textB}>E-mail</Text> 
      <Text style={styles.textC}>atphinn@gmail.com</Text> 
        <View style={{borderBottomColor: '#ffffff', borderBottomWidth: 1, width:350, }}>
        </View>
        <Text style={styles.textB}>password</Text> 
      <Text style={styles.textA}>**********</Text> 
        <View style={{borderBottomColor: '#ffffff', borderBottomWidth: 1, width:350, }}>
        </View>
          <View style={styles.button}>
            <Text>Register</Text>
            </View>
            <Text style={styles.sec2}> Reset password </Text>
         
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
    // backgroundColor: 'pink',
  },
  subheader: {
    color:"white",
    marginTop: 80,
    flex: 3,
    marginLeft: -280,
    fontSize: 10,
  },
  textA: {
    color: "white",
    marginTop: -60,
    marginLeft: -280,
    // flex: 1,
  },
  textB: {
    color:"white",
    marginTop: 10,
    flex: 1,
    marginLeft: -280,
    fontSize: 10,
  },
textC: {
    color: "white",
    marginTop: -60,
    marginLeft: -200,
    // flex: 1,
  },

 sec1: {
  // backgroundColor:"orange",
  flex: 1,


 },
sec2: {
  backgroundColor:"green",
  // flex: 3,

 },

  button: {
    backgroundColor:'rgb(78,227,196)',
    height: 60,
    width: 250,
    marginTop: 40,
    justifyContent:'center',
    alignItems: 'center',
  },

});

module.exports = Registration;