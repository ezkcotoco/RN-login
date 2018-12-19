import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Button, View,Image,Alert,ImageBackground,TouchableHighlight} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles'

const LoginButton =(props) =>{

        return (
            <TouchableHighlight
            style={styles.buttonstyle}         
             onPress={props.onPress}
           >

             <Text style={styles.normtext}>{props.children}</Text>
           </TouchableHighlight>

        )


}

export {LoginButton};