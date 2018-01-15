import { ADD_ALBUM, 
         INIT_COLLECTIONS
} from './constants'

import uniqWith from 'lodash/uniqWith'
import isEqual from 'lodash/isEqual'

const initialState = {
    collections: [],
    albums: [],
    lightboxIsOpen: false
}

export const mainReducer = (state = initialState, action) => {
    let result;
    switch (action.type) {
        case ADD_ALBUM:
            result = Object.assign({}, state);
            if (result.albums && result.albums.length == 0) {
                result.albums.push(action.value);
            } else {
                result.albums.push(action.value);
                result.albums = uniqWith(result.albums, isEqual);
            }
            return result;
        case INIT_COLLECTIONS:
            result = Object.assign({}, state);
            result.collections = action.value;
            return result;
        default: 
            return state
    }
}