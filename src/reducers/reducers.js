import { ADD_ALBUM, 
         INIT_COLLECTIONS,
         INITIAL_STATE
} from './constants'

import * as _ from 'lodash'

export const mainReducer = (state = INITIAL_STATE, action) => {
    let result;
    switch (action.type) {
        case ADD_ALBUM:
            result = _.assign({}, state);
            if (result.albums && result.albums.length == 0) {
                result.albums.push(action.value);
            } else {
                result.albums.push(action.value);
                result.albums = _.uniqWith(result.albums, _.isEqual);
            }
            return result;
        case INIT_COLLECTIONS:
            result = _.assign({}, state);
            result.collections = action.value;
            return result;
        default: 
            return state
    }
}