import { SELECT_COLLECTION, INIT_COLLECTIONS } from './constants'

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