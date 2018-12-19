import React, {Component} from 'react';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles'

const UserInput =(props) =>{


    return (
     

        <TextInput 
            style={styles.input} 
            placeholderTextColor='white' 
            placeholder={props.children}
            onChangeText= {props.onChangeText}

            secureTextEntry = {props.hidden}
            
            />         

    )


}

export {UserInput};