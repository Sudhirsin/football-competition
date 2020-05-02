import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    LOGOUT
} from './actionTypes'


const initState = {
    isAuth: false,
    isLoading: true,
    message: '',
    error: false,
    token: ''
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case USER_REGISTER_REQUEST: return {
            ...state,
            isLoading: false,
        }

        case USER_REGISTER_SUCCESS: return {
            ...state,
            isLoading: false,
            message: action.payload.message
        }

        case USER_REGISTER_FAILURE: return {
            ...state,
            isLoading: false,
            error: true
        }

        case USER_LOGIN_REQUEST: return {
            ...state,
            isLoading: false,
        }

        case USER_LOGIN_SUCCESS: 
            if (!action.payload.error) {
                return {
                    ...state,
                    isLoading: false,
                    isAuth: true,
                    message: action.payload.message,
                    token: action.payload.token
                }
            }

        case USER_LOGIN_FAILURE: return {
            ...state,
            isLoading: false,
            error: true
        }

        case LOGOUT: return {
            ...state,
            isAuth: false,
            token: ''
        }

        default: return state;

    }
}


export default authReducer;