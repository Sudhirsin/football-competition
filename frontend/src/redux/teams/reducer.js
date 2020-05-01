import {
    GET_TEAMS_REQUEST,
    GET_TEAMS_SUCCESS,
    GET_TEAMS_FAILURE
} from './actionTypes'


const initState = {
    isLoading: true,
    teams: [],
    error: false,
    message: ''
}

const teamsReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_TEAMS_REQUEST: return {
            ...state,
            isLoading: false,
        }

        case GET_TEAMS_SUCCESS: return {
            ...state,
            isLoading: false,
            teams: action.payload.teams
        }

        case GET_TEAMS_FAILURE: return {
            ...state,
            isLoading: false,
            error: true
        }

        default: return state;

    }
}


export default teamsReducer;