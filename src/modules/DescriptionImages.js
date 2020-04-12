
// Importaciones
import React from 'react';      // React

class DescriptionsImages extends React.Component {

  constructor(props) {
    super(props);
  
    switch (this.props.info.theme) {
      case "1":
        this.state = { title: "var(--color2)", text: "var(--color1)", background: "var(--color6)" };
        break;
      case "2":
        this.state = { title: "var(--color3)", text: "var(--color1)", background: "var(--color5)" };
        break;
      case "3":
        this.state = { title: "var(--color2)", text: "var(--color1)", background: "var(--color4)" };
        break;
      case "4":
        this.state = { title: "var(--color4)", text: "var(--color1)", background: "var(--color3)" };
        break;
      case "5":
        this.state = { title: "var(--color4)", text: "var(--color6)", background: "var(--color2)" };
        break;
      case "6":
        this.state = { title: "var(--color4)", text: "var(--color7)", background: "var(--color1)" };
        break;
    }
    
  }

  createList() {
    var content = [];
    for (var i = 0; i < this.props.info.subtitles.length; i++) {
      content.push(
        <div class="descriptionImages">
          <div class="descriptionImages-imageContent">
            <img class="descriptionImages-image" src={process.env.PUBLIC_URL + this.props.info.images[i]} alt={this.props.info.image} />
          </div>
          <div class="descriptionImages-subtitle" style={{ color: this.state.title }}>
            {this.props.info.subtitles[i]}
          </div>
          <div class="descriptionImages-subdescriptions" style={{ color: this.state.text }}>
            {this.props.info.subdescriptions[i]}
          </div>
        </div>
      );
    }
    return content;
  }

  render() {
    return (
      <div class="module"  style={{ background: this.state.background }}>
        <div class="descriptionImages-title" style={{ color: this.state.title }}>{this.props.info.title}</div>
        <div class="descriptionImages-description" style={{ color: this.state.text }}>{this.props.info.decription}</div>
        <div class="descriptionImages-content">
          {this.createList()}
        </div>
      </div>
    );
  }
}

// Exportaciones
export default DescriptionsImages;  
