import axios from 'axios'
export const userLogin = (user) =>{
    return(dispatch,getState) => {
        axios.post(`http://127.0.0.1:8000/auth/token/login/`,user).then(res =>{
            console.log(res);
            localStorage.setItem('token',res.data.auth_token)
            dispatch({type:'AUTH_SUCCESS',user}) 
        }).catch(err=>{
            console.log(err.response.data.code  );
            console.log(err.response.data);
            dispatch({type:'AUTH_FAILED',err})
        })
        
    }
}

export const userLogout = () =>{
    return(dispatch,getState)=>{
        axios.post(`http://127.0.0.1:8000/auth/token/logout/`,null,{
                headers:{
                    Authorization:'Token '+localStorage.getItem('token')
                }
            }).then(res=>{
                console.log(res);
                localStorage.clear();
                dispatch({type:'LOGOUT_SUCCESS'});
            }).catch(err=>{
                console.log(err);
            });
    }
}


export const userSignup = (user) =>{
    return(dispatch,getState) =>{
        console.log("inside userSignUp",user);
        axios.post(`http://127.0.0.1:8000/auth/users/`,user).then(res =>{
            console.log(res);
            dispatch({type:'REG_SUCCESS',user})
        }).catch(err=>{
            console.log(err);
        })
    }
}