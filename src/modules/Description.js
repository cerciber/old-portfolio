
// Importaciones
import React from 'react';      // React

class Description extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="module">
        <div class="description-title">{this.props.info.title}</div>
        <div class="description-description">{this.props.info.decription}</div>
      </div>
    );
  }
}

// Exportaciones
export default Description;  
