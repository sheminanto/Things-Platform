const initState = {
   autherr:null,
   regerr:null,
   login_status:null,
   neterr:null,
   loading:false,
   userDetails:null
}

const authReducer = ( state = initState, action) => {
    switch(action.type){
        case 'AUTH_SUCCESS':
            return{
                ...state,
                login_status:true,
                autherr:null,
                loading:false
            }
            
        case 'AUTH_FAILED':
            console.log("autherr");
            return{
                ...state,
                autherr:action.err,
                loading:false
            }   
        
        case 'REG_SUCCESS':
            console.log("Sign up Success",action.user);
            return{
                ...state,
                regerr:null
            }

        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                login_status:false
            }
        case 'REG_FAILED':
            return{
                ...state,
                regerr:action.err,
                loading:false
            }
        case 'NET_ERR':
            return{
                ...state,
                neterr:action.err
            }
        case 'LOADING':
            return{
                ...state,  
                loading:true
            }
        case 'USER_DETAILS':
            console.log('USER_DETAILS');
            return{
                ...state,
                userDetails:action.user
            }
        default:return state
    }
    
}

export default authReducer