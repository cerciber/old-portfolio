
// Importaciones
import React from 'react';      // React
import './Structure.css';
import Content from './../Content/Content'

class Structure extends React.Component {

  constructor(props) {
    super(props);
    this.state = { scene: props.scene }
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
          <li class="tab" onClick={event =>  window.location.href='/contact'}>Contacto</li> 
            <li class="tab" onClick={event =>  window.location.href='/about-me'}>Acerca de mí</li>
            <div class="tab"> 
              <li class="tabContent" onClick={event =>  window.location.href='/'}>Portafolio</li>
              <ul class="subtabs">
                <li class="subtab" onClick={event =>  window.location.href='/portfolio/trimcode'}>TrimCode</li>
                <li class="subtab" onClick={event =>  window.location.href='/portfolio/quicklist'}>QuickList</li>
                <li class="subtab" onClick={event =>  window.location.href='/portfolio/findcode'}>FindCode</li>
                <li class="subtab" onClick={event =>  window.location.href='/portfolio/tankattack'}>TankAttack</li>
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
