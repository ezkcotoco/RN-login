import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './app/components/Home';
import Login from './app/components/Login';
import {connect} from 'react-redux';


const AppNavigator = createStackNavigator({
  login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      header: null
    }
  },

  home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        header: null 
      }
    
  }

});

function mapStateToProps(state){
  return{
    detail : state.detail
    
  }

}

export default connect(mapStateToProps,null)(createAppContainer(AppNavigator));