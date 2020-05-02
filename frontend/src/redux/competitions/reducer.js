import {
    COMPETITIONS_REQUEST,
    COMPETITIONS_SUCCESS,
    COMPETITIONS_FAILURE,
    FAV_COMPETITIONS_REQUEST,
    FAV_COMPETITIONS_SUCCESS,
    FAV_COMPETITIONS_FAILURE
} from './actionTypes'


const initState = {
    isLoading: true,
    competitions: [],
    error: false,
    fav_competitions: []
}

const competionsReducer = (state = initState, action) => {
    switch(action.type) {
        case COMPETITIONS_REQUEST: return {
            ...state,
            isLoading: false,
        }

        case COMPETITIONS_SUCCESS: return {
                ...state,
                isLoading: false,
                competitions: action.payload.competitions
            }

        case COMPETITIONS_FAILURE: return {
            ...state,
            isLoading: false,
            error: true
        }

        case FAV_COMPETITIONS_REQUEST: return {
            ...state,
            isLoading: false,
        }

        case FAV_COMPETITIONS_SUCCESS: return {
                ...state,
                isLoading: false,
                fav_competitions: action.payload.favourite_competitions
            }

        case FAV_COMPETITIONS_FAILURE: return {
            ...state,
            isLoading: false,
            error: true
        }

        default: return state;

    }
}


export default competionsReducer;