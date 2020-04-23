
// Importaciones
import React from 'react';      // React

class Images extends React.Component {

  constructor(props) {
    super(props);
  
    switch (this.props.info.theme) {
      case "1":
        this.state = { title: "var(--color7)", text: "var(--color1)", background: "var(--color6)" };
        break;
      case "2":
        this.state = { title: "var(--color7)", text: "var(--color1)", background: "var(--color5)" };
        break;
      case "3":
        this.state = { title: "var(--color7)", text: "var(--color1)", background: "var(--color4)" };
        break;
      case "4":
        this.state = { title: "var(--color7)", text: "var(--color1)", background: "var(--color3)" };
        break;
      case "5":
        this.state = { title: "var(--color7)", text: "var(--color6)", background: "var(--color2)" };
        break;
      case "6":
        this.state = { title: "var(--color7)", text: "var(--color7)", background: "var(--color1)" };
        break;
    }
    
  }

  createList() {
    var content = [];
    for (var i = 0; i <this.props.info.images.length; i++) {
      content.push(
        <div class="images-image-content">
          <img class="images-image" src={process.env.PUBLIC_URL + this.props.info.images[i]} alt={this.props.info.image} />
        </div>
      ); 
    }
    return content;
  }

  render() {
    return (
      <div class="module"  style={{ background: this.state.background }}>
        {this.props.info.title != "" && <div class="moduleTitle" style={{ color: this.state.title }}>{this.props.info.title}</div>}
        {this.props.info.decription != "" && <div class="images-description" style={{ color: this.state.text }} dangerouslySetInnerHTML={{__html: 
        this.props.info.decription}}></div>}
        <div class="images-content">
          {this.createList()}
        </div>
      </div>
    );
  }
}

// Exportaciones
export default Images;  
