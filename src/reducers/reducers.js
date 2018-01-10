import { SELECT_COLLECTION, INIT_COLLECTIONS, SELECT_SET } from './constants'

const initialState = {
    collections: []
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_COLLECTION: 
            return { ...state, curCollection: action.value }        
        case INIT_COLLECTIONS: 
            return { ...state, collections: action.value }
        case SELECT_SET:
            return { ...state, curSet: action.value }
        default: 
            return state
    }
}