import React from "react"
import GridImage from "./GridImage"
import { Link } from 'react-router'
import { THUBMS_SIZE, ORIGIN_SIZE } from '../utils/constants'

class Grid extends React.Component {
  render() {
    const { imagesArray, padding, onClick, isPhotos } = this.props;
    const columns = this.props.columns || 3;
    const width = Math.floor(100 / columns);    
    console.log(imagesArray)
    const imageNodes = imagesArray.map((arr, index) => {
      if (isPhotos) {
        return (
          <GridImage key={ index } 
                     src={ arr.src }
                     onClick={ () => onClick(index) }
                     width={ width }
                     padding={ padding }/>
        )
      }
      return (
        <Link to={`collections/albums/${arr.id}`}>
          <GridImage key={ index }
                     src={ arr.src }
                     width={ width }
                     padding={ padding }/>

        </Link>
      )
    })  

    return (
      <div className="imageGrid">
        { imageNodes }
      </div>
    );
  }
}



Grid.propTypes = {
  imagesArray: React.PropTypes.array.isRequired,
  isPhotos: React.PropTypes.boolean,
  columns: React.PropTypes.number,
  padding: React.PropTypes.number
};

Grid.defaultProps = {
  imagesArray: []
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default Grid
