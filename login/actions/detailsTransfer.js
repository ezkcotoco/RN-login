import {DETAILS_TRANSFER} from './types'
import {Alert} from 'react-native';

export const detailsTransfer = (username,password,navigation) => {
  if((username != '') && (password != '') ){
    navigation.navigate('home')   
    
  }
  else{
    Alert.alert('Please input username and password')
  }    
  return {
    type: DETAILS_TRANSFER,
    payload: { username: username, password:password}
    
  };
}

export const inputDetails = () => {

  return {
    type: INPUT_DETAILS,
   
  };
}