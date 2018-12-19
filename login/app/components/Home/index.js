import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Button,ImageBackground, View} from 'react-native';
import styles from './styles'
import {connect} from 'react-redux';
import {detailsTransfer} from '../../../actions'



class Home extends Component {
    
    render() {    
      return (
        <ImageBackground source={require('./welcomeimg.jpg')} style={styles.container}>
          <Text style={styles.welcome}>Welcome!</Text>
          <Text style={styles.header}>Username:</Text>
          <Text style={styles.normtext}>{this.props.detail.username}</Text>
          
          <Text style={styles.header}>Password:</Text>
          <Text style={styles.normtext}>{this.props.detail.password}</Text>
          
        </ImageBackground>
      );
    }
}



//export default Home

function mapStateToProps(state){
  return{
    detail : state.detail    
  }

}

export default connect(mapStateToProps,{detailsTransfer})(Home);