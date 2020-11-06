import authReducer from './authReducer'
import deviceReducer from './deviceReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth:authReducer,
    device:deviceReducer
})

export default rootReducer