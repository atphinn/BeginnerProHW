import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
  Image,
  TextInput,
  StatusBar
} from 'react-native';

import Login from './Login';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
const searchIcon = <Icon name="search" size={30} color="#666" />;

class myclasses extends Component {
	render() {
		return(
			<View style={styles.container}>
					
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	sec1: {
		flex: 1,
		paddingTop: 30,
		paddingLeft: 30,
		paddingRight: 30,
	},
	searchfield: {
		height: 50,
		width: 270,		
		backgroundColor: 'transparent',
		color: 'gray',
	},
	icon: {
		borderBottomWidth: 1,
		borderBottomColor: 'gray',
		paddingTop: 5,
	},
	sec2: {
		flex: 1,
	},
});

module.exports = myclasses;