import axios from 'axios'
export const addDevice = (device) => {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: process.env.REACT_APP_API_URL + "/api/sensors/",
            data: device,
            headers: {
                Authorization: "Token " + localStorage.getItem("token"),
            },
        }).then(res => {
            console.log('addDevice', res)
            dispatch({ type: 'ADD_DEVICE', device: device })
        }).catch(err => {
            console.log('addDeviceErr', err.response)
            dispatch({ type: 'ADD_DEVICE_ERROR', err: err.response })
        })
    }

}

export const deleteDevice = (device) => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: process.env.REACT_APP_API_URL + "/api/sensors/?id=" + device.id,
            headers: {
                Authorization: "Token " + localStorage.getItem("token"),
            },
        }).then(res => {
            console.log("deleteDevice", res)
            dispatch({ type: 'DELETE_DEVICE', res: res })
        }).catch(err => {
            console.log('deleteDeviceError', err.response)
            dispatch({ type: 'DELETE_DEVICE_ERROR', err: err.response })
        })
    }
}


export const getDevices = () => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: process.env.REACT_APP_API_URL + "/api/sensors/",
            headers: {
                Authorization: "Token " + localStorage.getItem("token"),
            },

        }).then(res => {
            console.log("Fetched Devices", res)
            dispatch({ type: 'FETCH_DEVICES', devices: res.data })
        }).catch(err => {
            console.log('Error fetching devices', err);
            dispatch({ type: 'FETCH_DEVICES_ERROR', err: err })
        })
    }
}