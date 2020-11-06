const initState = {
   autherr:null,
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

        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                login_status:false
            }
        default:return state
    }
    
}

export default authReducer