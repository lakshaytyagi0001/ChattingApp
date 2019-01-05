import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    onLoginPress = () => {

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => { }, (error) => {
            Alert.alert(error.message);

        });
    }

    onCreateAccountPress = () => {
        
          this.props.navigation.navigate('Signup');
    }

    onForgotPasswordPress = () => {
        
        this.props.navigation.navigate('ForgotPassword');
    }

    render() {
        return(
            <View style={{paddingTop:50, alignItems:"center"}}>

            <Text>Login</Text>
            <View style={{padding: 5}}/>

            <TextInput style={{width: 200, height: 40, borderWidth: 1}}
            value={this.state.email}
            onChangeText={(text) => { this.setState({email: text}) }}
            placeholder=' Email'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            />
            <View style={{padding: 10}}/>

            <TextInput style={{width: 200, height: 40, borderWidth: 1}}
            value={this.state.password}
            onChangeText={(text) => { this.setState({password: text}) }}
            placeholder=' Password'
            secureTextEntry={true}
            autoCapitalize='none'
            autoCorrect={false}
            />

             <View style={{padding: 10}}/>

            < Button title="Login" onPress={this.onLoginPress} />
            <View style={{padding: 5}}/>
            < Button title="Create Account" onPress={this.onCreateAccountPress} />
            <View style={{padding: 5}}/>
            < Button title="Forgot Password" onPress={this.onForgotPasswordPress} />

            </View>
        );
    }
}

const styles = StyleSheet.create({


});