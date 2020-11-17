const initState = {
    autherr: null,
    regerr: null,
    login_status: false,
    neterr: null,
    loading: false,
    userDetails: null,
    deleteerr: null,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'AUTH_SUCCESS':
            return {
                ...state,
                login_status: true,
                autherr: null,
                loading: false
            }

        case 'AUTH_FAILED':
            return {
                ...state,
                autherr: action.err,
                loading: false
            }

        case 'REG_SUCCESS':
            return {
                initState
            }

        case 'LOGOUT_SUCCESS':
            return initState
        case 'REG_FAILED':
            return {
                ...state,
                regerr: action.err,
                loading: false
            }
        case 'NET_ERR':
            return {
                ...state,
                neterr: action.err,
                loading: null

            }
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'USER_DETAILS':
            return {
                ...state,
                userDetails: action.user
            }
        case 'DELETE_ERR':
            return {
                ...state,
                deleteerr: action.err
            }
        default: return state
    }

}

export default authReducer