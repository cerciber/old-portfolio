
// Importaciones
import React from 'react';      // React

class Characteristics extends React.Component {

  constructor(props) {
    super(props);
  }

  createList() {
    var content = [];
    for (var i = 0; i < this.props.info.subtitles.length; i++) {
      content.push(
        <div>
          <div class="caracteristics-subtitle">
            {this.props.info.subtitles[i]}
          </div>
          <div class="caracteristics-subdescriptions">
            {this.props.info.subdescriptions[i]}
          </div>
        </div>
      );
    }
    return content;
  }

  render() {
    return (
      <div class="module">
        <div class="caracteristics-title">{this.props.info.title}</div>
        <div class="caracteristics-description">{this.props.info.decription}</div>
        <div class="caracteristics-content">
          {this.createList()}
        </div>
      </div>
    );
  }
}

// Exportaciones
export default Characteristics;  
