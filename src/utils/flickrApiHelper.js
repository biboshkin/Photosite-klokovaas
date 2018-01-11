import {
    FLICKR_METHODS,
    API_KEY,
    USER_ID,
    FLICKR_RESPONCE_FORMAT,
    FLICKR_API_BASE_URL,
    NO_JSON_CALLBACK,
    ALBUM_SIZE
} from './constants'

export const getCollectionsTree = (callback) => {
    let url = FLICKR_API_BASE_URL.concat(
        "?method=", FLICKR_METHODS.GET_COLLECTIONS_TREE,
        "&api_key=", API_KEY,
        "&user_id=", USER_ID,
        "&nojsoncallback=", NO_JSON_CALLBACK,
        "&format=", FLICKR_RESPONCE_FORMAT
    )

    getFlickrResponce(url, callback);
}

export const getAlbumInfo = (albumId, callback) => {
    let url = FLICKR_API_BASE_URL.concat(
        "?method=", FLICKR_METHODS.GET_PHOTOS,
        "&api_key=", API_KEY,
        "&photoset_id=", albumId,
        "&user_id=", USER_ID,
        "&extras=", ALBUM_SIZE,
        "&nojsoncallback=", NO_JSON_CALLBACK,
        "&format=", FLICKR_RESPONCE_FORMAT
    )

    getFlickrResponce(url, callback)
}

const getFlickrResponce = (url, callback) => {
    //console.log('url: ' + url)
    fetch(url)
        .then(checkStatus)
        .then(parseJSON)
        .then(function(data) {
            console.info('Request succeeded with JSON response', data);
            if (callback) {
                callback(data);
            };
        }).catch(function(error) {
            console.error('Request failed.', error);
        })
}

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

const parseJSON = (response) => response.json()