
// Importaciones
import React from 'react';      // React

class Slides extends React.Component {

  constructor(props) {
    super(props);
    switch (this.props.info.theme) {
      case "1":
        this.state = {actual: 0, title: "var(--color2)", text: "var(--color1)", background: "var(--color6)" };
        break;
      case "2":
        this.state = {actual: 0, title: "var(--color3)", text: "var(--color1)", background: "var(--color5)" };
        break;
      case "3":
        this.state = {actual: 0, title: "var(--color2)", text: "var(--color1)", background: "var(--color4)" };
        break;
      case "4":
        this.state = {actual: 0, title: "var(--color4)", text: "var(--color1)", background: "var(--color3)" };
        break;
      case "5":
        this.state = {actual: 0, title: "var(--color4)", text: "var(--color6)", background: "var(--color2)" };
        break;
      case "6":
        this.state = {actual: 0, title: "var(--color4)", text: "var(--color7)", background: "var(--color1)" };
        break;
    }
    
  }

  onLeftClick() {
    this.setState({actual: (this.state.actual + this.props.info.images.length - 1) % this.props.info.images.length});
  }

  onRightClick() {
    this.setState({actual: (this.state.actual + 1) % this.props.info.images.length});
  }

  createList() {
    var content = [];
      content.push(
        <div>
          <div class="slides-imageContent">
            <button class="slides-left" onClick={()=>this.onLeftClick()}  style={{ color: this.state.title }}>{"<"}</button>
            <img class="slides-image" src={process.env.PUBLIC_URL + this.props.info.images[this.state.actual]} alt={this.props.info.image} />
            <button class="slides-right" onClick={()=>this.onRightClick()}  style={{ color: this.state.title }}>{">"}</button>
          </div>
          <div class="slides-subtitle" style={{ color: this.state.title }}>
            {this.props.info.subtitles[this.state.actual]}
          </div>
          <div class="slides-subdescriptions" style={{ color: this.state.text }} dangerouslySetInnerHTML={{__html: 
        this.props.info.subdescriptions[this.state.actual]}}>
          </div>
        </div>
      );
    return content;
  }

  render() {
    return (
      <div class="module"  style={{ background: this.state.background }}>
        <div class="moduleTitle" style={{ color: "var(--color7)" }}>{this.props.info.title}</div>
        <div class="slides-description" style={{ color: this.state.text }} dangerouslySetInnerHTML={{__html: 
        this.props.info.decription}}></div>
        <div class="slides-content">
          {this.createList()}
        </div>
      </div>
    );
  }
}

// Exportaciones
export default Slides;  
