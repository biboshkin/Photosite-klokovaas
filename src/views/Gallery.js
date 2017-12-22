import React from 'react'
import Lightbox from 'react-images'
import Grid from '../components/Grid'
import PreLoader from '../components/PreLoader'
require('../styles/gallery.css')

const masonryOptions = {
    transitionDuration: 0
};

const IMAGES_URL = "https://jsonplaceholder.typicode.com/photos";

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
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

	/*shouldComponentUpdate(nextProps, nextState) {
		if (JSON.stringify(nextState.images) === JSON.stringify(this.state.images) &&
			JSON.stringify(nextState.thumbs) === JSON.stringify(this.state.thumbs)) {
			return false;
		}
		return true;
	}*/

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

		fetch(IMAGES_URL)
			.then((responce) => {
				if (responce.status == "200") {
					return responce.json();
				}
			})
			.then((data) => {
				let i;
				let thumbs = [];
				let images = [];
				let text = "";
				for(i = 0; i < 10; i++) { thumbs.push({ src: data[i].thumbnailUrl }) }
				for(i = 0; i < 10; i++) { images.push({ src: data[i].url }) }
			
				
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
				}
				this.setState({
					images,
					thumbs,
					text
				})
			});

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