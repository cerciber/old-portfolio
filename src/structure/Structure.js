// Componente base de la aplicación

// Importaciones
import React from 'react';      // React
import './Structure.css';

// Constantes para las escenas
export const ABOUT_ME_SCENE = 0;
export const PORTFOLIO_SCENE = 1;
export const CONTACT_SCENE = 2;
export const TRIM_CODE_SCENE = 3;
export const QUICK_LIST_SCENE = 4;
export const FIND_CODE_SCENE = 5;
export const TANK_ATTACT_SCENE = 6;

class Structure extends React.Component {

  constructor(props) {
    super(props);
    this.state = { scene: ABOUT_ME_SCENE }
  }

  changeScene(val) {
    this.setState({ scene: val });
  }

  getScene() {
    switch (this.state.scene) {
      case ABOUT_ME_SCENE:
        return <div>0</div>;
      case PORTFOLIO_SCENE:
        return <div>1</div>;
      case CONTACT_SCENE:
        return <div>2</div>;
      case TRIM_CODE_SCENE:
        return <div>3</div>;
      case QUICK_LIST_SCENE:
        return <div>4</div>;
      case FIND_CODE_SCENE:
        return <div>5</div>;
      case TANK_ATTACT_SCENE:
        return <div>6</div>;
    }
  }

  render() {
    return (
      <div class="body">
        <div class="header">
          <div class="icons">
            <img class="icon" src={process.env.PUBLIC_URL + '/Images/facebook.png'} alt="facebook" />
            <img class="icon" src={process.env.PUBLIC_URL + '/Images/instagram.png'} alt="instagram" />
            <img class="icon" src={process.env.PUBLIC_URL + '/Images/twitter.png'} alt="twitter" />
          </div>
          <div class="user">
            <div class="photo">
              <img class="profilePhoto" src={process.env.PUBLIC_URL + '/Images/Photo.jpg'} alt="Photo" />
            </div>
            <div class="name">
              Cesar Augusto <br /> Torres Ardila
					  </div>
          </div>
          <div class="title">
            Cerciber
          </div>
        </div>
        <nav class="tabs">
          <ul>
            <li class="tab" onClick={() => this.changeScene(ABOUT_ME_SCENE)}>Acerca de mí</li>
            <div class="tab"> 
              <li onClick={() => this.changeScene(PORTFOLIO_SCENE)}>Portafolio</li>
              <ul class="subtabs">
                <li class="subtab" onClick={() => this.changeScene(TRIM_CODE_SCENE)}>TrimCode</li>
                <li class="subtab" onClick={() => this.changeScene(QUICK_LIST_SCENE)}>QuickList</li>
                <li class="subtab" onClick={() => this.changeScene(FIND_CODE_SCENE)}>FindCode</li>
                <li class="subtab" onClick={() => this.changeScene(TANK_ATTACT_SCENE)}>TankAttack</li>
              </ul>
            </div>
            <li class="tab" onClick={() => this.changeScene(CONTACT_SCENE)}>Contacto</li> 
          </ul>
        </nav>
        <div class="content">
          {this.getScene()}
        </div>
      </div>
    );
  }
}

// Exportaciones
export default Structure;  
