// Componente base de la aplicación

// Importaciones
import React from "react"; // React
import "./App.css";
//import Structure from "./structure/Structure";
//import * as Constants from "./Information/Constants";

// Nuevas importaciones
import Cover from "./views/Cover";
import Content from "./views/Content";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {view: 'Portfolio', showCover: true};
    this.goToContent = this.goToContent.bind(this);
  }

  goToContent(view) {
    this.setState({view: view, showCover: false });
  };

  render() {
    return <div className="app-content"><Content info={this.state} /><Cover goToContent={this.goToContent} info={this.state} /></div>;
  }
}

// Exportaciones
export default App;
