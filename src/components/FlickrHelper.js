const methods = {
    getPhotos: 'flickr.photosets.getPhotos',
    getAlbums: 'flickr.photosets.getList',
    getSizes: 'flickr.photos.getSizes',
    getInfo: 'flickr.photos.getInfo'
}

const SIZES = {
    ORIGINAL: "Original",
    THUMBNAIL: "Thumbnail",
    LARGE: "Large"
}

const apiKey = 'ba1ee33a82534e97b9af8da2d5740802';
const secret = '9e772c14348633ad';
const userId = '139149536@N02'

export async function getImagesByAlbum(albumId) {
    debugger
    let response = await fetch(getPhotos(albumId));
    let data = await response.json();
    let photos = data.map((item) => {
        let photoSizes = getPhotoSizes(item.id);
        let photoInfo = getPhotoInfo(item.id);

        return {
            id: item.id,
            title: item.title,
            originUrl: photoSizes.filter(item => item.label === SIZES.ORIGINAL)[0],
            thumbnailUrl: photoSizes.filter(item => item.label === SIZES.THUMBNAIL)[0]
        }
    });
    console.log(photos);
    return photos;
};

export const getAlbums = () => `https://api.flickr.com/services/rest/?method=${methods.getAlbums}&api_key=${apiKey}&user_id=${userId}&format=json`;

const getPhotos = (photosetId) => `https://api.flickr.com/services/rest/?method=${methods.getPhotos}&api_key=${apiKey}&photoset_id=${photosetId}&user_id=${userId}&format=json`;

async function getPhotoSizes (photoId) {
    const url = `https://api.flickr.com/services/rest/?method=${methods.getSizes}&api_key=${apiKey}&photo_id=${photoId}&format=json`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function getPhotoInfo (photoId) {
    const url = `https://api.flickr.com/services/rest/?method=${methods.getInfo}&api_key=${apiKey}&photo_id=${photoId}&format=json`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
}
    