const initState = {
    posts:[
        {name:'login',status:false},
        {name:'Shreyas S Kumar',username:'shreyas.sk',email:'shreyassreekripa@gmail.com',phone:'9061653047'}
    ],
     alerts:[
        {name:'Alert 1',cat:'danger'},
        {name:'Alert 2',cat:'warning'}
    ],
    devices:[
        {id:1,name:'Temperature Sensor',location:'Garden',status:'Active'},
        {id:2,name:'Temperature Sensor',location:'Living Room',status:'Inactive'},
        {id:3,name:'Temperature Sensor',location:'Kitchen',status:'Active'},    
        {id:4,name:'Motion Sensor',location:'Front Gate',status:'Active'}
        
    ]
   
}

const rootReducer = (state = initState,action)=>{
    return state;
}

export default rootReducer;