import { ADD_ALBUM,
         INIT_COLLECTIONS
} from './constants'

export const addAlbumFull = ( albumFull ) => {
    return {
        type: ADD_ALBUM,
        value: albumFull
    }
}

export const initCollections = ( collections ) => {
    return {
        type: INIT_COLLECTIONS,
        value: collections
    }
}