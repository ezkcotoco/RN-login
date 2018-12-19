import {DETAILS_TRANSFER} from '../actions/types'
import {INPUT_DETAILS} from '../actions/types'
const detail = {
    username :'',
    password :'',
    usernameInput :'',
    passwordInput :''

}

export default (state=detail,action) =>{
    switch(action.type){
        case DETAILS_TRANSFER:
             
            return {username:action.payload.username,password:action.payload.password } ;
        
        case INPUT_DETAILS:
             
            return {... state } ;
        
        
        
        default:
            return state;

    }



}