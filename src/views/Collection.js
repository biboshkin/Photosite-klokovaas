import React from 'react'
import Lightbox from 'react-images'
import Grid from '../components/Grid'
import PreLoader from '../components/PreLoader'
import { getAlbumInfo } from '../utils/flickrApiHelper'
import { connect } from 'react-redux'
import { ALBUM_SIZE } from '../utils/constants'

require('../styles/collection.css')

class Collection extends React.Component {
	componentWillMount() {
		console.log('component will mount');
		const collection = this.props.collections.filter(item => item.id === this.props.id)[0];
		
		this.setState({
			collection,
			albums: []
		})

		const photosets = collection.set;
		photosets.map((item, index) => {
			getAlbumInfo(item.id, responceJson => this.getAlbumFull(responceJson, item))
		})
  	} 

	render() {
		console.log('render')
		console.log(this.state)
		const { loading, albums, collection } = this.state;
		const { title } = this.props.params;

		if (loading) {
			return ( <h2>Загрузка...</h2> )
		}

		return (
				<div className="gallery">
					<div style={{width: '80%', margin: '60px 10px'}}>
						{ collection && collection.description }
					</div>	
					<Grid imagesArray={ albums }
						  onClick={ () => this.openLightbox() } 
						  columns={ 3 } 
						  padding={ 3 } />
					{/*<Lightbox
						images={ images }
						isOpen={ lightboxIsOpen }
						onClickPrev={ () => this.gotoPrevious() }
						onClickNext={ () => this.gotoNext() }
						onClose={ () => this.closeLightbox() }
						currentImage={ currentImage }
					/>*/}
				</div>
			)
	}

	getAlbumFull (responce, album) {
		const photos = responce.photoset && responce.photoset.photo;
		if (photos) {
			let randomPhoto = photos[getRandom(photos.length)];
			const albumFull = {
				id: album.id,
				title: album.title,
				src: randomPhoto[ALBUM_SIZE],
				description: album.description
			};

			let albums = this.state.albums;
			albums.push(albumFull);
			this.setState({ albums });
		}
	}

	gotoPrevious() {
		this.setState({
			currentImage: this.state.currentImage - 1
		})
	}

	gotoNext() {
		this.setState({
			currentImage: this.state.currentImage + 1
		})
	}

	openLightbox(index) {
		this.setState({
			lightboxIsOpen: true,
			currentImage: index
		})

	}

	closeLightbox() {
		this.setState({
			lightboxIsOpen: false
		})
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		collections: state.collections,
		id: ownProps.routeParams.id
	}
}

const getRandom = (length) => Math.floor(Math.random() * length)

Collection.propTypes = {
	collections: React.PropTypes.array.isRequired,
	id: React.PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Collection);