const initState = {

    loading: false,
    devices: [],
    datas: [],
    labels: [],
    dataTable: [],
    fetchDataStatus: null,
    addDeviceStatus: null,
    deleteDeviceErr: null,
    updateDeviceStatus: null,
    fetchDeviceErr: null
}

const deviceReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_DEVICE':
            console.log("Added device", action.device);
            return {
                ...state,
                loading: false,
                addDeviceStatus: 'success'
            }
        case 'ADD_DEVICE_ERROR':
            console.log('Error adding device', action.err);
            return {
                ...state,
                loading: false,
                addDeviceStatus: action.err
            }
        case 'DELETE_DEVICE':
            console.log('Device Deleted', action.res);
            return {
                ...state,
                loading: false
            }
        case 'DELETE_DEVICE_ERROR':
            console.log('Error Deleting Device', action.err);
            return {
                ...state,
                loading: false,
                deleteDeviceErr: action.err
            }
        case 'FETCH_DEVICES':
            console.log('Fetched devices', action.devices);
            return {
                ...state,
                devices: action.devices,
                loading: false

            }

        case 'FETCH_DEVICES_ERROR':
            console.log('Error fetching devices', action.err);
            return {
                ...state,
                loading: false,
                fetchDeviceErr: action.err
            }
        case 'APP_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'UPDATE_DEVICE':
            return {
                ...state,
                loading: false,
                updateDeviceStatus: 'success'
            }
        case 'UPDATE_DEVICE_ERROR':
            return {
                ...state,
                loading: false,
                updateDevice: action.err
            }
        case 'CLEAR_STATUS':
            console.log('clearing update status');
            return {
                ...state,
                addDeviceStatus: null,
                updateDeviceStatus: null,
                fetchDataStatus: null,
                datas: [], labels: [], dataTables: []
            }
        case 'FETCH_DATA_SUCCESS':
            console.log("fetch redux");
            return {
                ...state,
                fetchDataStatus: 'success',
                datas: action.deviceData.data,
                labels: action.deviceData.labels,

            }
        case 'FETCH_DATA_FAILED':
            return {
                ...state,
                fetchDataStatus: 'Error'
            }
        case 'DATA_TABLE':
            {
                console.log('DATA_TABLE', action.dataTable);
                return {
                    ...state,
                    dataTable: action.dataTable
                }
            }
        default:
            return state;
    }

}

export default deviceReducer