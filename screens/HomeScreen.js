import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TestComponent} from './../components/AppComponents';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{paddingTop:20}}>
      <Text> HomeScreen </Text>
      <TestComponent/>
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
