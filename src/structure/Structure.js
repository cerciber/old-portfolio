
// Importaciones
import React from 'react';      // React
import './Structure.css';
import * as Constants from './../Information/Constants';
import Content from './../Content/Content'

class Structure extends React.Component {

  constructor(props) {
    super(props);
    this.state = { scene: Constants.TRIM_CODE_SCENE }
  }

  changeScene(val) {
    this.setState({ scene: val });
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
          <li class="tab" onClick={() => this.changeScene(Constants.CONTACT_SCENE)}>Contacto</li> 
            <li class="tab" onClick={() => this.changeScene(Constants.ABOUT_ME_SCENE)}>Acerca de mí</li>
            <div class="tab"> 
              <li class="tabContent" onClick={() => this.changeScene(Constants.PORTFOLIO_SCENE)}>Portafolio</li>
              <ul class="subtabs">
                <li class="subtab" onClick={() => this.changeScene(Constants.TRIM_CODE_SCENE)}>TrimCode</li>
                <li class="subtab" onClick={() => this.changeScene(Constants.QUICK_LIST_SCENE)}>QuickList</li>
                <li class="subtab" onClick={() => this.changeScene(Constants.FIND_CODE_SCENE)}>FindCode</li>
                <li class="subtab" onClick={() => this.changeScene(Constants.TANK_ATTACT_SCENE)}>TankAttack</li>
              </ul>
            </div>
          </ul>
        </nav>
        <div class="content">
          <Content scene={this.state.scene}></Content>
        </div>
      </div>
    );
  }
}

// Exportaciones
export default Structure;  
