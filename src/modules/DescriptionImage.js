
// Importaciones
import React from 'react';      // React

class DescriptionImage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const text = (
      <div>
        <div class="descriptionImage-title">{this.props.info.title}</div>
        <div class="descriptionImage-description">{this.props.info.decription}</div>
      </div>
    );
    const image = (
      <div>
        <img class="descriptionImage-image" src={process.env.PUBLIC_URL + this.props.info.image} alt={this.props.info.image} />
      </div>
    );
    return (
      <div class="module descriptionImage">
        <div class="descriptionImage-left">
          {this.props.info.type == "1" ? text : image}
        </div>
        <div class="descriptionImage-right">
        {this.props.info.type == "1" ? image : text}
        </div>
      </div>
    );
  }
}

// Exportaciones
export default DescriptionImage;  
