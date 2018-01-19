import React from 'react'
import Lightbox from 'react-images'
import Grid from '../components/Grid'
import PreLoader from '../components/PreLoader'
import { addAlbumFull } from '../reducers/actions'
import { getAlbumFull } from '../utils/flickrApiHelper'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { THUBMS_SIZE } from '../utils/constants'

require('../styles/collection.css')

class Collection extends React.Component {
	componentDidMount() {
		const collection = this.props.collections
			.filter(item => item.id === this.props.id)[0];
		const albums = collection.set;

		albums.map((item, index) => {
			getAlbumFull(item.id, responce => this.getAlbumFullCallback(responce, item))
		})
  	}

	render() {
		const { albums } = this.props;
		const collection = this.props.collections
			.filter(item => item.id === this.props.id)[0];
		const imagesArray = albums.map(item => {
			const randomPhoto = item.photos[getRandom(item.photos.length)];
			return {
				id: item.id,
				src: randomPhoto[THUBMS_SIZE]
			}
		})
		return (
			<div className="collection">
				<Grid 	imagesArray={ imagesArray }
						isPhotos={ false }
						columns={ 3 }
						padding={ 3 } />
			</div>
		)
	}

	getAlbumFullCallback (responce, album) {
		const { albums, addAlbumFull } = this.props;

		const photos = responce.photoset && responce.photoset.photo;
		if (photos) {
			let randomPhoto = photos[getRandom(photos.length)];
			const albumFull = {
				id: album.id,
				title: album.title,
				photos,
				description: album.description
			};

			addAlbumFull(albumFull);
		}
	}
}

const getRandom = (length) => Math.floor(Math.random() * length)

const mapStateToProps = (state, ownProps) => {
	return {
		collections: state.collections,
		id: ownProps.routeParams.id,
		albums: state.albums
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addAlbumFull: bindActionCreators(addAlbumFull, dispatch)
	}
}

Collection.propTypes = {
	collections: React.PropTypes.array.isRequired,
	id: React.PropTypes.string.isRequired,
	albums: React.PropTypes.array.isRequired
};

Collection.defaultProps = {
  albums: []
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);