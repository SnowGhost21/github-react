export const FETCH_BEGIN = 'FETCH_BEGIN'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'
export const FETCH_BY_ID = 'FETCH_BY_ID'

export const fetchBegin = () => ({
    type: FETCH_BEGIN
})

export const fetchSuccess = repositories => ({
    type: FETCH_SUCCESS,
    payload: { repositories }
})

export const fetchError = error => ({
    type: FETCH_ERROR,
    payload: { error }
})

export function setTargetRepository(id) {
    return async (dispatch, getState) => {
        let state = getState()
        let repositories = state.repositories
        console.log('foo', state.repositories)

        if (repositories.length) {
            let repository = repositories.filter((e) => e.id === parseInt(id))[0]
            return dispatch({
                type: FETCH_BY_ID,
                payload: repository
            })
        }
    }

}