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
    this.state = {scene: ABOUT_ME_SCENE}
  }

  changeScene(val) {
    this.setState({scene: val});
  }

  render() {
    return (
      <div>
        <div class="header">
          <div class="icons">
            Iconos
          </div>
          <div class="user">
            <div class="photo">
              Photo
            </div>
            <div class="name">
              Cesar Augusto <br/> Torres Ardila
					  </div>
          </div>
          <div class="title">
            Cerciber
				  </div>
        </div>
        <div class="nav">
          <button class="button" type="button" onClick={() => this.changeScene(ABOUT_ME_SCENE)}>Acerca de mi</button>
          <button class="button" type="button" onClick={() => this.changeScene(PORTFOLIO_SCENE)}>Portafolio</button>
          <button class="button" type="button" onClick={() => this.changeScene(CONTACT_SCENE)}>Contacto</button>
          <button class="button" type="button" onClick={() => this.changeScene(TRIM_CODE_SCENE)}>TrimCode</button>
          <button class="button" type="button" onClick={() => this.changeScene(QUICK_LIST_SCENE)}>QuickList</button>
          <button class="button" type="button" onClick={() => this.changeScene(FIND_CODE_SCENE)}>FindCode</button>
          <button class="button" type="button" onClick={() => this.changeScene(TANK_ATTACT_SCENE)}>TankAttack</button>
        </div>
        <div class="content">
          {this.state.scene}
          </div>
      </div>
    );
  }
}

// Exportaciones
export default Structure;  
