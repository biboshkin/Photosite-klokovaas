import React from "react"
import GridImage from "./GridImage"

export default class Grid extends React.Component {
  render() {
    const { imagesArray, padding, onClick } = this.props;
    const columns = this.props.columns || 3;
    const width = Math.floor(100 / columns);
      console.log('imagesArray')
      console.log(imagesArray)
    const imageNodes = imagesArray.map((arr, index) => {
      return (
        <GridImage key={ index } 
                   src={ arr.src }
                   onClick={ () => onClick() } 
                   width={ width } 
                   padding={ padding }/>
      );
    });

    return (
      <div className="imageGrid">
        { imageNodes }
      </div>
    );
  }
}

Grid.propTypes = {
  imagesArray: React.PropTypes.array.isRequired,
  columns: React.PropTypes.number,
  padding: React.PropTypes.number
};

Grid.defaultProps = {
  imagesArray: []
};
