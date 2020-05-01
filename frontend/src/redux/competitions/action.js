import axios from 'axios'
import swal from 'sweetalert'

import {
    COMPETITIONS_REQUEST,
    COMPETITIONS_SUCCESS,
    COMPETITIONS_FAILURE
} from './actionTypes'

export const competitionsRequest = (payload) => ({
    type: COMPETITIONS_REQUEST,
    payload
})

export const competitionsSuccess = (payload) => ({
    type: COMPETITIONS_SUCCESS,
    payload
})

export const competitionsFailure = (error) => ({
    type: COMPETITIONS_FAILURE,
    error
})

export const getCompetitions = () => {
    return dispatch => {
        dispatch(competitionsRequest());
        return axios
            .get('http://127.0.0.1:5000/api/competitions')
            .then(res => {
                console.log(res.data)
                dispatch(competitionsSuccess(res.data))
            })
            .catch(err => {
                dispatch(competitionsFailure(err))
            });
    };
}
