import React from 'react';
import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import Lightbox from 'react-images';

import { Row, Col } from 'react-bootstrap';

export default class PhotoArea extends React.Component {
    constructor() {
        super();
        this.state = { photos: PHOTO_SET, pageNum: 1, totalPages: 1, loadedAll: false, currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        if (this.state.photos.length - 2 === this.state.currentImage) {
            //this.loadMorePhotos();
        }
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    renderGallery() {
        return (
            <Row> 
                <Col xs={ 12 }>
                    <Measure whitelist={['width']}>
                        {
                            ({ width }) => {
                                var cols = 1;
                                if (width >= 480) {
                                    cols = 2;
                                }
                                if (width >= 1024) {
                                    cols = 3;
                                }
                                return <Gallery photos={this.state.photos} 
                                                cols={cols} 
                                                onClickPhoto={this.openLightbox} 
                                                margin={ 8 }/>
                            }
                        }
                    </Measure>
                </Col>
            </Row>
        );
    }
    render() {
        // no loading sign if its all loaded
        if (this.state.photos) {
            return (
                <div className="App">
                    {this.renderGallery()}
                    <Lightbox
                        theme={{ container: { background: 'rgba(0, 0, 0, 0.85)' } }}
                        images={ this.state.photos }
                        backdropClosesModal={ true }
                        onClose={ this.closeLightbox }
                        onClickPrev={ this.gotoPrevious }
                        onClickNext={ this.gotoNext }
                        currentImage={ this.state.currentImage }
                        isOpen={ this.state.lightboxIsOpen }
                        width={ 1600 }
                    />
                    { !this.state.loadedAll && <div className="loading-msg" id="msg-loading-more">Loading</div> }
                </div>
            );
        }
        else {
            return (
                <div className="App">
                    <div id="msg-app-loading" className="loading-msg">Loading</div>
                </div>
            );
        }
    }
};


const PHOTO_SET = [
    {
        src: '../../img/1.jpg',
        alt: 'image 1',
    },
    {
        src: '../../img/2.jpg',
        alt: 'image 2',
    },
    {
        src: '../../img/3.jpg',
        alt: 'image 3',
    },
    {
        src: '../../img/4.jpg',
        alt: 'image 4',
    },
    {
        src: '../../img/5.jpg',
        alt: 'image 5',
    },
    {
        src: '../../img/6.jpg',
        alt: 'image 6',
    }
]


