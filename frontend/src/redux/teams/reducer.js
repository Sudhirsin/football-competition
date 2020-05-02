import {
    GET_TEAMS_REQUEST,
    GET_TEAMS_SUCCESS,
    GET_TEAMS_FAILURE,
    TEAM_DETAILS_REQUEST,
    TEAM_DETAILS_SUCCESS,
    TEAM_DETAILS_FAILURE
} from './actionTypes'


const initState = {
    isLoading: true,
    teams: [],
    error: false,
    message: '',
    teamDetails: []
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

        case TEAM_DETAILS_REQUEST: return {
            ...state,
            isLoading: false,
        }

        case TEAM_DETAILS_SUCCESS: 
        console.log(action.payload.team)
        return {
            ...state,
            isLoading: false,
            teamDetails: action.payload.team
        }

        case TEAM_DETAILS_FAILURE: return {
            ...state,
            isLoading: false,
            error: true
        }

        default: return state;

    }
}


export default teamsReducer;