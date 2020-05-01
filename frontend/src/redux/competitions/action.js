import axios from 'axios'
import swal from 'sweetalert'

import {
    COMPETITIONS_REQUEST,
    COMPETITIONS_SUCCESS,
    COMPETITIONS_FAILURE,
    FAV_COMPETITIONS_REQUEST,
    FAV_COMPETITIONS_SUCCESS,
    FAV_COMPETITIONS_FAILURE
} from './actionTypes'

// Competition 
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


// Make favourite competitions
export const favCompetitionsRequest = (payload) => ({
    type: FAV_COMPETITIONS_REQUEST,
    payload
})

export const favCompetitionsSuccess = (payload) => ({
    type: FAV_COMPETITIONS_SUCCESS,
    payload
})

export const favCompetitionsFailure = (error) => ({
    type: FAV_COMPETITIONS_FAILURE,
    error
})


export const makeFavouriteCompetition = (payload, token) => {
    return dispatch => {
        dispatch(favCompetitionsRequest());
        return axios
            .post('http://127.0.0.1:5000/api/users/competitions', payload, {
                headers: {
                    "Authorization": `bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                console.log(res.data)
                swal({
                    title: "Done!",
                    text: res.data.message,
                    icon: "success",
                  });
                dispatch(favCompetitionsSuccess(res.data))
            })
            .catch(err => {
                dispatch(favCompetitionsFailure(err))
            });
    };
}