const SELECT_COLLECTION = 'SELECT_COLLECTION';
const INIT_COLLECTIONS = 'INIT_COLLECTIONS';
const SELECT_SET = 'SELECT_SET';


export const selectCollection = ( collectionId ) => {
    return {
        type: SELECT_COLLECTION,
        value: collectionId
    }
}

export const initCollections = ( collections ) => {
    return {
        type: INIT_COLLECTIONS,
        value: collections
    }
}

export const form = (state = {}, action) => {
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