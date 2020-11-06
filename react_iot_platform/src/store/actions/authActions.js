import axios from 'axios'
import '../../config/domain.js'
export const userLogin = (user) =>{
    // console.log("base",base_url);
    return(dispatch,getState) => {
        axios.post(`http://things-platform.herokuapp.com/auth/token/login/`,user).then(res =>{
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
        axios.post(`http://things-platform.herokuapp.com/auth/token/logout/`,null,{
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
        axios.post(`http://things-platform.herokuapp.com/auth/users/`,user).then(res =>{
            console.log(res);
            dispatch({type:'REG_SUCCESS',user})
            //post req to auto login after successful sign-up
            axios.post(`http://things-platform.herokuapp.com/auth/token/login/`,{email:user.email,password:user.password}).then(res =>{
            console.log(res);
            localStorage.setItem('token',res.data.auth_token)
            dispatch({type:'AUTH_SUCCESS',user}) 
        }).catch(err=>{
            console.log(err.response.data.code  );
            console.log(err.response.data);
            dispatch({type:'AUTH_FAILED',err})
        })
           
        }).catch(err=>{
            console.log(err.response);
            dispatch({type:'REG_FAILED',err})
        })
    }
}