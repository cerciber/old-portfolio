// Importaciones
import React from "react"; // React
import "./Content.css";
import Portfolio from "./Portfolio";
import CurriculumVitae from "./CurriculumVitae";
import Contact from "./Contact";


class Content extends React.Component {

  render() {
    return (
      <div className="content">
        {this.props.info.view === 'Portfolio' ? <Portfolio /> : this.props.info.view === 'CurriculumVitae' ? <CurriculumVitae /> : <Contact /> }
      </div>
    );
  }
}

// Exportaciones
export default Content;
