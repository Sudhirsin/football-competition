import {
    COMPETITIONS_REQUEST,
    COMPETITIONS_SUCCESS,
    COMPETITIONS_FAILURE
} from './actionTypes'


const initState = {
    isLoading: true,
    competitions: [],
    error: false,
    token: ''
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

        default: return state;

    }
}


export default competionsReducer;