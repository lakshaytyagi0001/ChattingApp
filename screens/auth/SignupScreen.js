import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';
import { NavigationActions } from 'react-navigation';
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
        var navActions = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: "Login"})
            ]
        });

        this.props.navigation.dispatch(navActions);
    }

    render() {
        return(
            <View style={{paddingTop:50, alignItems:"center"}}>

            <Text> Signup Screen</Text>

            <TextInput style={{width: 200, height: 40, borderWidth: 1}}
            value={this.state.email}
            onChangeText={(text) => { this.setState({email: text}) }}
            />

            <TextInput style={{width: 200, height: 40, borderWidth: 1}}
            value={this.state.password}
            onChangeText={(text) => { this.setState({password: text}) }}
            />

            <TextInput style={{width: 200, height: 40, borderWidth: 1}}
            value={this.state.passwordConfirm}
            onChangeText={(text) => { this.setState({passwordConfirm: text}) }}
            />

            < Button title="Signup" onPress={this.onSignupPress} />
            < Button title="Back To Login" onPress={this.onBackToLoginPress} />

            </View>
        );
    }
}

const styles = StyleSheet.create({


});