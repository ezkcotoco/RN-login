import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Button, Image,Alert,ImageBackground,TouchableHighlight} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles'
import {LoginButton} from './loginButton'
import {UserInput} from './userInput'
import {connect} from 'react-redux';
import {detailsTransfer} from '../../../actions'



class Login extends Component { 
    
   state ={ text:'',username:'',password:''}

    checkLogin()    {
      
      this.props.detailsTransfer(this.props.detail.usernameInput,this.props.detail.passwordInput,this.props.navigation)

  
    }
  

    render() {
    const {container,welcome,buttonstyle, normtext, input} = styles

      return (
        <ImageBackground source={require('./loginimg.jpg')} style={styles.container}>
          <Image style={styles.imgstrecth} source={require('./logo.png')} />          
          <UserInput onChangeText={text => {this.props.detail.usernameInput = text}} >username</UserInput>         
          <UserInput hidden={true} onChangeText={text => {this.props.detail.passwordInput = text}} >password</UserInput>    
          <LoginButton onPress={() => this.checkLogin()}>Login</LoginButton>
        </ImageBackground>
      );
    }
  }



//export default Login;
function mapStateToProps(state){
  return{
    detail : state.detail,
    
  }

}

export default connect(mapStateToProps,{detailsTransfer})(Login);