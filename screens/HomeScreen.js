import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {TestComponent} from './../components/AppComponents';
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style={{paddingTop:20}}>
      <Text> HomeScreen </Text>
      <TestComponent/>
      < Button title='Signout' onPress={this.onSignoutPress}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  });
