import { FETCH_BEGIN, FETCH_ERROR, FETCH_SUCCESS, FETCH_BY_ID } from '../actions/Actions'

const inititalState = {
    repositories: [],
    loading: false,
    error: null,
    item: null
}

export function repositoryReducer(state = inititalState, action) {
    switch (action.type) {
        case FETCH_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                repositories: action.payload.repositories
            }
        case FETCH_ERROR:
            return {
                ...state,
                error: action.payload.error,
                repositories: []
            }

        case FETCH_BY_ID: {
            return {
                ...state,
                item: action.payload
            }
        }
        default:
            return state
    }
}