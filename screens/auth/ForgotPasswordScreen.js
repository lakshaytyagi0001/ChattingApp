import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';
import * as firebase from 'firebase';

export default class ForgotPasswordScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        };
    }

    onResetPasswordPress = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
        .then(() => {
            Alert.alert("Password Set Email has Been Sent.");
        }, (error) => {
            Alert.alert(error.message);
        });
    }

    onBackToLoginPress = () => {
        
         this.props.navigation.navigate('Login');
    }

    render() {
        return(
            <View style={{paddingTop:50, alignItems:"center"}}>

            <Text>Forgot Password</Text>
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

            < Button title="Reset Password" onPress={this.onResetPasswordPress} />
            <View style={{padding: 5}}/>
            < Button title="Back To Login" onPress={this.onBackToLoginPress} />
            
            </View>
        );
    }
}

const styles = StyleSheet.create({


});