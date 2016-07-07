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
  StatusBar,
  ScrollView
} from 'react-native';

import Login from './Login';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import myclasses from './myclasses';
const searchIcon = <Icon name="search" size={30} color="#666" />;

class Search extends Component {

	linkPage(comp) {
		this.props.navigator.push({
			component: comp
		})
	}

	constructor(props) {
      super(props);
      this.state = {
        events:" ",
      }

    }

	componentDidMount() {
		      
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://localhost:3000/events/", true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onload = function(e) {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					console.log(xhr.responseText);
					var result = JSON.parse(xhr.responseText);

				} else {
					console.log(xhr.statusText);
				}
			}
		};
		xhr.onerror = function(e) {
			console.error(xhr.statusText);
		};
		xhr.send();
	}

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.sec1}>
					<View style={{borderBottomColor: 'gray', borderBottomWidth: 1, flexDirection: 'row',}}>
		            	<TextInput style={styles.searchfield}
		              		onChangeText={(text) => this.setState({text})}
		              		placeholder='What class are you looking for?'
		              		placeholderTextColor='gray'
		              		autoCorrect={false} />
		              		<Text style={styles.icon}>{searchIcon}</Text>
	          		</View>	

		        </View> 
		        <Text style={styles.sug}>Suggested</Text> 
					<View>
						 //<Text>{xhr.responseText(this.state.events)}</Text>
					</View>	 
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

	sug: {

		marginTop: -100,
		marginLeft: 15,
		color: 'gray',

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

		flexDirection: "row",
		borderBottomColor: 'black',
		
	},

});

module.exports = Search;