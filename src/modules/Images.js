
// Importaciones
import React from 'react';      // React

class Images extends React.Component {

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
    for (var i = 0; i < Math.floor(this.props.info.images.length / 2); i++) {
      if (i % 2== 0) {
        content.push(
          <div class="images">
            <div class="images-image1-content">
              <img class="images-image1" src={process.env.PUBLIC_URL + this.props.info.images[i*2]} alt={this.props.info.image} />
            </div>
            <div class="images-image2-content">
              <img class="images-image2" src={process.env.PUBLIC_URL + this.props.info.images[i*2+1]} alt={this.props.info.image} />
            </div>
          </div>
        );
      } else {
        content.push(
          <div class="images">
            <div class="images-image2-content">
              <img class="images-image2" src={process.env.PUBLIC_URL + this.props.info.images[i*2]} alt={this.props.info.image} />
            </div>
            <div class="images-image1-content">
              <img class="images-image1" src={process.env.PUBLIC_URL + this.props.info.images[i*2+1]} alt={this.props.info.image} />
            </div>
          </div>
        );
      }
    }

    if (this.props.info.images.length % 2 != 0) {
      content.push(
        <div class="images">
          <div class="images-image3-content">
            <img class="images-image3" src={process.env.PUBLIC_URL + this.props.info.images[this.props.info.images.length - 1]} alt={this.props.info.image} />
          </div>
        </div>
      );
    }
    return content;
  }

  render() {
    return (
      <div class="module"  style={{ background: this.state.background }}>
        <div class="images-title" style={{ color: this.state.title }}>{this.props.info.title}</div>
        <div class="images-description" style={{ color: this.state.text }}>{this.props.info.decription}</div>
        <div class="images-content">
          {this.createList()}
        </div>
      </div>
    );
  }
}

// Exportaciones
export default Images;  
