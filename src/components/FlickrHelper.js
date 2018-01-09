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

const apiKey = '057506bea3c95531af684a709fe7b4ed';
const secret = '9e772c14348633ad';
const userId = '139149536@N02';

const CONSUMER_KEY = 'ba1ee33a82534e97b9af8da2d5740802';
const CONSUMER_SECRET = '9e772c14348633ad';

export function getCollectionsTree() {
    
}

export async function getImagesByAlbum(photosetId) {
    debugger
    let response = await getPhotosByPhotoset(photosetId);
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

export const getAlbums = () => `https://api.flickr.com/services/rest/?method=${methods.getAlbums}&api_key=${CONSUMER_KEY}&user_id=${userId}&format=json`;

async function getPhotosByPhotoset(photosetId) {
    const flickr = OAuth({
        consumer: {
            key: CONSUMER_KEY,
            secret: CONSUMER_SECRET
        },
        signature_method: 'HMAC-SHA1',
        hash_function: function(base_string, key) {
            return crypto.createHmac('sha1', key).update(base_string).digest('base64');
        }
    });

    flickr.setToken({
        key: 'xxxxx',
        secret: 'xxxxx'
    });

    flickr.get({
        url: 'https://api.flickr.com/services/rest/',
        qs: {
            method: methods.getPhotos,
            api_key: CONSUMER_KEY,
            photoset_id: "72157691093193604",
            user_id: userId
        },
        json: true
    }, function(err, res, photos) {
        return photos;
    })
}

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