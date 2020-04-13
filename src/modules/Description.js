
// Importaciones
import React from 'react';      // React

class Description extends React.Component {

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

  render() {
    return (
      <div class="module" style={{ background: this.state.background }}>
        <div class="description-title" style={{ color: this.state.title }}>{this.props.info.title}</div>
        <div class="description-description" style={{ color: this.state.text }} dangerouslySetInnerHTML={{__html: 
        this.props.info.decription}}></div>
      </div>
    );
  }
}

// Exportaciones
export default Description;  
