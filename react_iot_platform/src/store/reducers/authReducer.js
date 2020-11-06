const initState = {
   autherr:null,
   regerr:null,
   login_status:null
}

const authReducer = ( state = initState, action) => {
    switch(action.type){
        case 'AUTH_SUCCESS':
            return{
                ...state,
                login_status:true,
                autherr:null
            }
            
        case 'AUTH_FAILED':
            console.log("autherr");
            return{
                ...state,
                autherr:action.err
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
                regerr:action.err
            }
        default:return state
    }
    
}

export default authReducer