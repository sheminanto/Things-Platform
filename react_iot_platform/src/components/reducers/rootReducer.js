const initState = {
    posts:[
        {name:'login',status:true},
        {name:'Shreyas S Kumar',username:'shreyas.sk',email:'shreyassreekripa@gmail.com',phone:'9061653047'}
    ],
    alerts:[{
        type:'danger'
    }]
}

const rootReducer = (state = initState,action)=>{
    return state;
}

export default rootReducer;