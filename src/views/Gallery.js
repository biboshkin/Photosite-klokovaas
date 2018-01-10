import React from 'react'
import Lightbox from 'react-images'
import Grid from '../components/Grid'
import PreLoader from '../components/PreLoader'
import { getImagesByAlbum } from '../utils/flickrApiHelper'

require('../styles/gallery.css')

const masonryOptions = {
    transitionDuration: 0
};

export default class extends React.Component {
	constructor(props){
		console.log('Gallery constructor')
		console.log(props)
		super(props)
		this.state = {
			collectionId: props.id,
			lightboxIsOpen: false,
			text: "",
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
		const { text, images, thumbs, lightboxIsOpen, currentImage } = this.state;
		debugger
		const photos = getImagesByAlbum('72157663915574218');
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
						<p className="gallery-text">Здесь вы можете посмотреть примеры моих работ</p> 
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
				thumbs,
				text
			});
		};
		return (
				<div className="gallery">
					<div style={{width: '80%', margin: '60px 10px'}}>
						{ text }
					</div>	
					<Grid imagesArray={thumbs} onClick={this.openLightbox.bind(this)} columns={3} padding={3} />
					<Lightbox
						images={images}
						isOpen={lightboxIsOpen}
						onClickPrev={this.gotoPrevious}
						onClickNext={this.gotoNext}
						onClose={this.closeLightbox}
						currentImage={currentImage}
					/>
				</div>
			)
	}
}