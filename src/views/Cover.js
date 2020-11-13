// Importaciones
import React from "react"; // React
import "./Cover.css";
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Work from '@material-ui/icons/FolderShared';
import Email from '@material-ui/icons/Email';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';


class Cover extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          info: props
      };
      this.coverShow = this.coverShow.bind(this);
      this.goToContent = this.goToContent.bind(this);
  }

  componentDidMount() {
		 this.setState({info: { showCover: true }});
	}

  coverShow() {
    const currentShow = this.state.info.showCover;
    this.setState({info: { showCover: !currentShow }});
  };

  goToContent(view) {
    this.setState({info: {view: view, showCover: false }});
    this.props.goToContent(view);
  };

  render() {
    return (
      <div className={'cover ' + (this.state.info.showCover ? 'cover-show' : 'cover-hide')}>
        <div className="cover-information">
          <div className="cover-information-text">
            &#8220;El conocimiento posee la fuerza suficiente como para
            cambiarlo todo, usémoslo para crear un mundo mejor.&#8221;
          </div>
          <div className="cover-information-triangle-cover">
            <svg
              className="cover-information-triangle"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="0,100 100,100 100,0" />
            </svg>
          </div>
        </div>
        <div className="cover-links">
          <div className="cover-link" onClick={() => this.goToContent("Portfolio")} ><div className="cover-link-content"><Work style={{width: '20%', height: '80%', color: '#0da15d'}}></Work>Portafolio</div></div>
          <div className="cover-link" onClick={() => this.goToContent("CurriculumVitae")} ><div className="cover-link-content"><AssignmentInd style={{width: '20%', height: '80%', color: '#0da15d'}}></AssignmentInd>Curriculum Vitae</div></div>
          <div className="cover-link" onClick={() => this.goToContent("Contact")} ><div className="cover-link-content"><Email style={{width: '20%', height: '80%', color: '#0da15d'}}></Email>Contacto</div></div>
        </div>
        <div className="cover-slogan">
          <div className="cover-photo-frame">
            <img
              className="cover-photo"
              src={process.env.PUBLIC_URL + "/Images/PhotoSemiBlank.jpg"}
              alt=""
            />
          </div>
          <div className="cover-user-information">
            <div className="cover-name">Cesar Augusto Torres Ardila</div>
            <div className="cover-slogan-text">
              Soy un joven que busca adquirir conocimientos de muchas cosas para
              crear <b>soluciones</b>, contribuir a una <b>mejor sociedad</b> y
              brindarle <b>calidad de vida</b> a las personas a través de la
              tecnología.
            </div>
          </div>
        </div>
        <div className="cover-bottom" onClick={this.coverShow} >
          <div className="cover-bottom-button">
            <KeyboardArrowDown style={{width: '100%', height: '100%', color: '#ffffff'}}></KeyboardArrowDown>
          </div>
        </div>
      </div>
    );
  }
}

// Exportaciones
export default Cover;
