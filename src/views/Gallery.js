import React from 'react'
import Lightbox from 'react-images'
import Grid from '../components/Grid'
import PreLoader from '../components/PreLoader'
import { getImagesByAlbum } from '../utils/flickrApiHelper'
import { connect } from 'react-redux'

require('../styles/gallery.css')

const masonryOptions = {
    transitionDuration: 0
};

class Gallery extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			collection: props.collections.filter(item => item.id === props.id)[0],
			lightboxIsOpen: false,
			thumbs: [],
			images: []
		}
		this.closeLightbox = this.closeLightbox.bind(this)
		this.openLightbox = this.openLightbox.bind(this)
		this.gotoPrevious = this.gotoPrevious.bind(this)
		this.gotoNext = this.gotoNext.bind(this)
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

	render() {
		const { title } = this.props.params;
		console.log('state')
		console.log(this.state)
		const { collection, images, thumbs, lightboxIsOpen, currentImage } = this.state;
		let photos;
		if (photos) {
			let i;
			let thumbs = [];
			let images = [];
			let text = "";
			for(i = 0; i < 10; i++) { thumbs.push({ src: data[i].thumbnailUrl }) }
			for(i = 0; i < 10; i++) { images.push({ src: data[i].originUrl }) }
		
			
			switch (title) {
				case "photos":
					text = ( 
						<p className="gallery-text">{ collection.description }</p> 
					)
					break;
				default:
					text = (
						<div className="gallery-text">
							<p>Ничего не нашлось...</p>
							<p>Попробуйте ещё раз</p>	
						</div>
					)
					break;
			};
			this.setState({
				images,
				thumbs
			});
		};
		return (
				<div className="gallery">
					<div style={{width: '80%', margin: '60px 10px'}}>
						{ collection && collection.description }
					</div>	
					<Grid imagesArray={ thumbs } 
						  onClick={ this.openLightbox.bind(this) } 
						  columns={3} 
						  padding={3} />
					<Lightbox
						images={ images }
						isOpen={ lightboxIsOpen }
						onClickPrev={ this.gotoPrevious }
						onClickNext={ this.gotoNext }
						onClose={ this.closeLightbox }
						currentImage={ currentImage }
					/>
				</div>
			)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		collections: state.collections,
		id: ownProps.routeParams.id
	}
}

export default connect(mapStateToProps)(Gallery);