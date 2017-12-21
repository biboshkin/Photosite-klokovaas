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
			currentImage: 6
		}
		this.closeLightbox = this.closeLightbox.bind(this)
		this.openLightbox = this.openLightbox.bind(this)
		this.gotoPrevious = this.gotoPrevious.bind(this)
		this.gotoNext = this.gotoNext.bind(this)
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (JSON.stringify(nextState.images) === JSON.stringify(this.state.images) &&
			JSON.stringify(nextState.thumbs) === JSON.stringify(this.state.thumbs)) {
			return false;
		}
		return true;
	}

	gotoPrevious() {
		this.setState({
			currentImage: this.state.currentImage -1
		})
	}

	gotoNext() {
		this.setState({
			currentImage: this.state.currentImage +1
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
		const { title } = this.props.params
		let text
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
				for(i = 0; i < 10; i++) { thumbs.push({ src: data[i].thumbnailUrl }) }
				for(i = 0; i < 10; i++) { images.push({ src: data[i].url }) }
			
				
				switch (title) {
					case "photos":
						text = (
							<span>
								<p>Здесь вы можете посмотреть примеры моих работ</p>		
							</span>
						)
						break
					default:
						text = (
							<span>
								<p>Ничего не нашлось...</p>
								<p>Попробуйте ещё раз</p>	
							</span>
						)
						break
				}
				this.setState({
					images,
					thumbs
				})
			});

			return (
					<div className="gallery">
						<div style={{width: '80%', margin: '30px auto 100px'}}>
							<i className="fa fa-quote-left" style={{fontSize: 22, color: 'rgba(0,0,0,0.4)', position: 'relative', top: 30, right: 15}}></i>
							{text}
							<i className="fa fa-quote-right" style={{fontSize: 22, color: 'rgba(0,0,0,0.4)'}}></i>
						</div>	
						<Grid imagesArray={this.state.thumbs} onClick={this.openLightbox.bind(this)} columns={3} padding={3} />
						<Lightbox
							images={this.state.images}
							isOpen={this.state.lightboxIsOpen}
							onClickPrev={this.gotoPrevious}
							onClickNext={this.gotoNext}
							onClose={this.closeLightbox}
							currentImage={this.state.currentImage}
						/>
					</div>
				)
	}
}