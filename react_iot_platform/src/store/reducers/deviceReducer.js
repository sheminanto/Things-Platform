const initState = {
    // devices:[
    //     {id:1,name:'Temperature Sensor',location:'Garden',description:'To measure the temperature outside and water plants accordingly'},
    //     {id:2,name:'Fire Alarm',location:'Kitchen',description:'To determine accidents due to fire inside kitchen'},
    //     {id:3,name:'Temperature Sensor',location:'Bedroom',description:'To measure the temperature inside room and switch on/off AC'},
    //     {id:4,name:'Light Sensor',location:'Room',description:'To measure the light intensity inside room and automate lighting'},
    //     {id:5,name:'Motion Sensor',location:'Front Gate',description:'To identify motion outside'}

    // ]
    devices: null
}

const deviceReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_DEVICE':
            console.log("Added device", action.device);
            return state;
        case 'ADD_DEVICE_ERROR':
            console.log('Error adding device', action.err);
            return state;
        case 'DELETE_DEVICE':
            console.log('Device Deleted', action.res);
            return state;
        case 'DELETE_DEVICE_ERROR':
            console.log('Error Deleting Device', action.err);
            return state;
        case 'FETCH_DEVICES':
            console.log('Fetched devices', action.devices);
            return {
                ...state,
                devices: action.devices

            }

        case 'FETCH_DEVICES_ERROR':
            console.log('Error fetching devices', action.err);
            return state;

        default:
            return state;
    }

}

export default deviceReducer