import React from 'react'
import Lightbox from 'react-images'
import { connect } from 'react-redux'
import Grid from '../components/Grid'
import PreLoader from '../components/PreLoader'
import { getAlbumInfo } from '../utils/flickrApiHelper'
import { THUBMS_SIZE, ORIGIN_SIZE } from '../utils/constants'
import { setCollection } from '../reducers/actions'

require('../styles/collection.css')

class Album extends React.Component {
	constructor(props) {
		super(props);
		const { id, albums } = props;
		this.state = {
			album: albums.filter(item => item.id === id)[0],
			lightboxIsOpen: false
		}
	}

	render() {
		const { album, lightboxIsOpen, currentImage } = this.state;
		const photos = album.photos || [];
		const gridImages = photos.map(item => {
			return {
				src: item[THUBMS_SIZE]
			}
		});
		const images = photos.map(item => {
			return {
				src: item[ORIGIN_SIZE],
				caption: item.title
			}
		});

		return (
				<div className="collection">
					<Grid imagesArray={ gridImages }
						  onClick={ (index) => this.openLightbox(index) } 
						  columns={ 3 }
						  isPhotos={ true }
						  padding={ 3 } />
                    <Lightbox
						images={ images }
						isOpen={ lightboxIsOpen }
						backdropClosesModal={ true }						
						preloadNextImage={ true }
						onClickPrev={ () => this.gotoPrevious() }
						onClickNext={ () => this.gotoNext() }
						onClose={ () => this.closeLightbox() }
						currentImage={ currentImage }
						spinner={ PreLoader }
						width={ 1200 }
					/>
				</div>
			)
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
		albums: state.albums,
		id: ownProps.routeParams.id
	}
}

const getRandom = (length) => Math.floor(Math.random() * length)

Album.propTypes = {
	albums: React.PropTypes.array.isRequired,
	id: React.PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Album);