
// Importaciones
import React from 'react';      // React

class Characteristics extends React.Component {

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
        <div>
          <div class="caracteristics-subtitle" style={{ color: this.state.title }}>
            {this.props.info.subtitles[i]}
          </div>
          <div class="caracteristics-subdescriptions" style={{ color: this.state.text }} dangerouslySetInnerHTML={{__html: 
        this.props.info.subdescriptions[i]}}>
          </div>
        </div>
      );
    }
    return content;
  }

  render() {
    return (
      <div class="module" style={{ background: this.state.background }}>
        <div class="caracteristics-title" style={{ color: this.state.title }}>{this.props.info.title}</div>
        <div class="caracteristics-description" style={{ color: this.state.text }} dangerouslySetInnerHTML={{__html: 
        this.props.info.decription}}></div>
        <div class="caracteristics-content">
          {this.createList()}
        </div>
      </div>
    );
  }
}

// Exportaciones
export default Characteristics;  
