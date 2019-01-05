import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';
import * as firebase from 'firebase';

export default class SignupScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConfirm: "",

        };
    }

    onSignupPress = () => {
        if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert("Password Do Not Match");
            return;
        }


        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => { }, (error) => {
            Alert.alert(error.message);
        });
    }

    onBackToLoginPress = () => {
        
        this.props.navigation.navigate('Login');
    }

    render() {
        return(
            <View style={{paddingTop:50, alignItems:"center"}}>

            <Text> Signup Screen</Text>
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

            <TextInput style={{width: 200, height: 40, borderWidth: 1}}
            value={this.state.passwordConfirm}
            onChangeText={(text) => { this.setState({passwordConfirm: text}) }}
            placeholder=' Confirm Password'
            secureTextEntry={true}
            autoCapitalize='none'
            autoCorrect={false}
            />

             <View style={{padding: 10}}/>

            < Button title="Signup" onPress={this.onSignupPress} />
            <View style={{padding: 5}}/>
            < Button title="Back To Login" onPress={this.onBackToLoginPress} />

            </View>
        );
    }
}

const styles = StyleSheet.create({


});