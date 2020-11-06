export const addDevice = (device) =>{
    return (dispatch, getState,{getFirebase,getFirestore}) => {
        //async call to database
        const firestore = getFirestore();
        firestore.collection('devices').add({
            ...device,
            timestamp: new Date()
        }).then(() =>{
            dispatch({type:'ADD_DEVICE',device:device});
        }).catch((err) =>{
            dispatch({type:'ADD_DEVICE_ERROR',err});
        })
        

    }
}