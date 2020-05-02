import axios from 'axios'

import {
    GET_TEAMS_REQUEST,
    GET_TEAMS_SUCCESS,
    GET_TEAMS_FAILURE,
    TEAM_DETAILS_REQUEST,
    TEAM_DETAILS_SUCCESS,
    TEAM_DETAILS_FAILURE
} from './actionTypes'

export const getTeamsRequest = (payload) => ({
    type: GET_TEAMS_REQUEST,
    payload
})

export const getTeamsSuccess = (payload) => ({
    type: GET_TEAMS_SUCCESS,
    payload
})

export const getTeamsFailure = (error) => ({
    type: GET_TEAMS_FAILURE,
    error
})

export const getTeams = (payload, token) => {
    return dispatch => {
        dispatch(getTeamsRequest());
        return axios
            .post('http://127.0.0.1:5000/api/teams', payload, {
                headers: {
                    "Authorization":`bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                console.log(res.data)
                dispatch(getTeamsSuccess(res.data))
            })
            .catch(err => {
                dispatch(getTeamsFailure(err))
            });
    };
}


// Get team details Action
export const teamDetailsRequest = (payload) => ({
    type: TEAM_DETAILS_REQUEST,
    payload
})

export const teamDetailsSuccess = (payload) => ({
    type: TEAM_DETAILS_SUCCESS,
    payload
})

export const teamDetailsFailure = (error) => ({
    type: TEAM_DETAILS_FAILURE,
    error
})

export const getTeamDetails = (payload, token) => {
    return dispatch => {
        dispatch(teamDetailsRequest());
        return axios
            .post('http://127.0.0.1:5000/api/team', payload, {
                headers: {
                    "Authorization":`bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                console.log(res.data)
                dispatch(teamDetailsSuccess(res.data))
            })
            .catch(err => {
                dispatch(teamDetailsFailure(err))
            });
    };
}
