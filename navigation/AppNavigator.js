import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from './../screens/auth/LoginScreen';
import SignupScreen from './../screens/auth/SignupScreen';
import ForgotPasswordScreen from './../screens/auth/ForgotPasswordScreen';

const RootStackNavigator = StackNavigator (
{
  Login: { screen: LoginScreen},
  Signup: { screen: SignupScreen},
  ForgotPassword: { screen: ForgotPasswordScreen},

  Main: { screen: MainTabNavigator}
}
);

export default class AppNavigator extends React.Component {
  render() {
    return < RootStackNavigator />;
  }
}