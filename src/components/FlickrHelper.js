const methods = {
    getPhotos: 'flickr.photosets.getPhotos',
    getAlbums: 'flickr.photosets.getList',
    getSizes: 'flickr.photos.getSizes',
    getInfo: 'flickr.photos.getInfo'
}

const apiKey = 'ba1ee33a82534e97b9af8da2d5740802';
const secret = '9e772c14348633ad';
const userId = '139149536@N02'

const getAlbums = `https://api.flickr.com/services/rest/?method=${methods.getAlbums}&api_key=${apiKey}&user_id=${userId}&format=json`;
const getPhotos = (photosetId) => `https://api.flickr.com/services/rest/?method=${methods.getPhotos}&api_key=${apiKey}&photoset_id=${photosetId}&user_id=${userId}&format=json`;
const getPhotoSizes = (photoId) => `https://api.flickr.com/services/rest/?method=${methods.getSizes}&api_key=${apiKey}&photo_id=${photoId}&format=json`;
const getPhotoInfo = (photoId) => `https://api.flickr.com/services/rest/?method=${methods.getInfo}&api_key=${apiKey}&photo_id=${photoId}&format=json`;