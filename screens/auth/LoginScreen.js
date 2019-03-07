import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, Image} from 'react-native';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
      };
    
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

            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
            <TextInput style={styles.inputs}
            value={this.state.email}
            onChangeText={(text) => { this.setState({email: text}) }}
            placeholder=' Email'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            />
            </View>

            <View style={{padding: 7}}/>

            <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
            value={this.state.password}
            onChangeText={(text) => { this.setState({password: text}) }}
            placeholder=' Password'
            secureTextEntry={true}
            autoCapitalize='none'
            autoCorrect={false}
            />
            </View>

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
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
      },
      inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
      },


});