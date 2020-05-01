import axios from 'axios'
import swal from 'sweetalert'

import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    LOGOUT
} from './actionTypes'

export const userRegisterRequest = (payload) => ({
    type: USER_REGISTER_REQUEST,
    payload
})

export const userRegisterSuccess = (payload) => ({
    type: USER_REGISTER_SUCCESS,
    payload
})

export const userRegisterFailure = (error) => ({
    type: USER_REGISTER_FAILURE,
    error
})

export const userRegister = (payload) => {
    return dispatch => {
        dispatch(userRegisterRequest());
        return axios
            .post('http://127.0.0.1:5000/api/users', {...payload})
            .then(res => {
                swal({
                    title: "Done!",
                    text: res.data.message,
                    icon: "success",
                  });
                dispatch(userRegisterSuccess(res.data))
            })
            .catch(err => {
                dispatch(userRegisterFailure(err))
            });
    };
}


// user login

export const userLoginRequest = (payload) => ({
    type: USER_LOGIN_REQUEST,
    payload
})

export const userLoginSuccess = (payload) => ({
    type: USER_LOGIN_SUCCESS,
    payload
})

export const userLoginFailure = (error) => ({
    type: USER_LOGIN_FAILURE,
    error
})


export const userLogin = (payload) => {
    return dispatch => {
        dispatch(userLoginRequest())
        return axios
            .post('http://127.0.0.1:5000/api/auth', {...payload})
            .then(res => {
                swal({
                    title: "Done!",
                    text: res.data.message,
                    icon: "success",
                  });
                dispatch(userLoginSuccess(res.data))
            })
            .catch(err => {
                dispatch(userLoginFailure(err))
            });
    }
}

// Logout
export const logoutUser = () => ({
    type: LOGOUT,
})