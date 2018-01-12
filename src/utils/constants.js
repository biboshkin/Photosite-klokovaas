let FLICKR_SIZES = {
    ORIGIN: "url_o",
    MEDIUM: "url_m",
    SMALL: "url_s",
    THUMBS: "url_t",
}

export const FLICKR_METHODS = {
    GET_PHOTOS: 'flickr.photosets.getPhotos',
    GET_ALBUMS: 'flickr.photosets.getList',
    GET_SIZES: 'flickr.photos.getSizes',
    GET_INFO: 'flickr.photos.getInfo',
    GET_COLLECTIONS_TREE: 'flickr.collections.getTree'
}

export const NO_JSON_CALLBACK = 1;

export const API_KEY = 'ba1ee33a82534e97b9af8da2d5740802';

export const USER_ID = '139149536@N02';

export const THUBMS_SIZE = FLICKR_SIZES.MEDIUM;

export const ORIGIN_SIZE = FLICKR_SIZES.ORIGIN;

export const FLICKR_API_BASE_URL = "https://api.flickr.com/services/rest/";

export const FLICKR_RESPONCE_FORMAT = "json";