import React from 'react';
import { StyleSheet, View, Text, TextInput, Button} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class ForgotPasswordScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        };
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

            <Text>Forgot Password</Text>

            <TextInput style={{width: 200, height: 40, borderWidth: 1}}
            value={this.state.email}
            onChangeText={(text) => { this.setState({email: text}) }}
            />

            < Button title="Reset Password" onPress={this.onResetPasswordPress} />
            < Button title="Back To Login" onPress={this.onBackToLoginPress} />
            
            </View>
        );
    }
}

const styles = StyleSheet.create({


});