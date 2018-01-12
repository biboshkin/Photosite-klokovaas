import { SAVE_ALBUMS, INIT_COLLECTIONS } from './constants'

const initialState = {
    collections: []
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ALBUMS: 
            return { ...state, albums: action.value }        
        case INIT_COLLECTIONS: 
            return { ...state, collections: action.value }
        default: 
            return state
    }
}