import axios from 'axios'

function fetchDevices(dispatch) {
    dispatch({ type: 'APP_LOADING' })
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
export const addDevice = (device) => {
    return (dispatch) => {
        dispatch({ type: 'APP_LOADING' })
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

export const deleteDevice = (id) => {
    console.log('Delete device', id);
    return (dispatch, getState) => {
        dispatch({ type: 'APP_LOADING' })
        axios({
            method: 'DELETE',
            url: process.env.REACT_APP_API_URL + "/api/sensors/?id=" + id,
            headers: {
                Authorization: "Token " + localStorage.getItem("token"),
            },
        }).then(res => {
            console.log("deleteDevice", res)
            dispatch({ type: 'DELETE_DEVICE', res: res })
            fetchDevices(dispatch);
        }).catch(err => {
            console.log('deleteDeviceError', err.response)
            dispatch({ type: 'DELETE_DEVICE_ERROR', err: err.response })
        })
    }
}


export const getDevices = () => {
    return (dispatch) => {
        dispatch({ type: 'APP_LOADING' })
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

export const updateDevice = (device) => {
    return (dispatch) => {
        dispatch({ type: 'APP_LOADING' })
        axios({
            method: 'PATCH',
            url: process.env.REACT_APP_API_URL + "/api/sensors/",
            data: device,
            headers: {
                Authorization: "Token " + localStorage.getItem("token"),
            },
        }).then(res => {
            console.log('updateDevice', res)
            dispatch({ type: 'UPDATE_DEVICE', device: device })
        }).catch(err => {
            console.log('updateDeviceErr', err.response)
            dispatch({ type: 'UPDATE_DEVICE_ERROR', err: err.response })
        })
    }

}

export const clearStatus = () => {
    return (dispatch) => {
        dispatch({ type: 'CLEAR_STATUS' })
    }
}


export const fetchData = (id) => {
    return (dispatch) => {
        dispatch({ type: 'CLEAR_STATUS' })
        axios({
            method: 'get',
            url: process.env.REACT_APP_API_URL + "/api/data/?sensor=" + id,
            headers: {
                Authorization: "Token " + localStorage.getItem("token"),
            },

        }

        ).then(res => {
            dispatch({ type: 'DATA_TABLE', dataTable: res.data })
            console.log("Fetched Data");
            console.log(res);
            let data = [], labels = [];
            res.data.map(deviceData => {
                data.push(deviceData.data)
                let timeStamp = new Date(deviceData.datetime)
                labels.push(timeStamp.getHours().toString() + ":" + timeStamp.getMinutes().toString())
            })
            console.log(data.slice(-10));
            console.log(labels.slice(-10));
            const deviceData = { data: data.slice(-10), labels: labels.slice(-10) }
            console.log(deviceData);
            dispatch({ type: 'FETCH_DATA_SUCCESS', deviceData: deviceData })
        }).catch(err => {
            console.log("Error fetching data");
            console.log(err.response);
        }

        )
    }
}