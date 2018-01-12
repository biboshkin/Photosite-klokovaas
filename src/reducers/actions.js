import { SAVE_ALBUMS, INIT_COLLECTIONS } from './constants'

export const saveAlbums = ( albums ) => {
    return {
        type: SAVE_ALBUMS,
        value: albums
    }
}

export const initCollections = ( collections ) => {
    return {
        type: INIT_COLLECTIONS,
        value: collections
    }
}