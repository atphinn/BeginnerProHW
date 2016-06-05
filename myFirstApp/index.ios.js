/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
  TouchableHighlight,
  Navigator
} from 'react-native';

import Login from './Login';

function renderScene(route, navigator){
  return <route.component route={route} navigator={navigator} />;
}

class myFirstApp extends Component {
  render() {
    const initialRoute = {
      component: Login
    }
    return (
      <View style={{flex:1,backgroundColor:"black",}}>
        <Navigator 
        initialRoute={initialRoute}
        renderScene={renderScene} />
      </View>
    );
  }
}

AppRegistry.registerComponent('myFirstApp', () => myFirstApp);
