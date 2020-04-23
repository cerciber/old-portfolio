
// Importaciones
import React from 'react';      // React
import './Structure.css';
import Content from './../Content/Content'
import * as Constants from './../Information/Constants';

class Structure extends React.Component {

  constructor(props) {
    super(props);
    this.state = { scene: props.scene }
  }

  callback = (dataFromChild) => {
    this.setState({scene: dataFromChild})
    window.scrollTo(0, 0)

  }

  render() {
    return (
      <div class="body">
        <div class="header">
          <div class="icons">
            <a href="https://github.com/Cerciber/" target="_blank"><img class="icon" src={process.env.PUBLIC_URL + '/Images/icon_github.png'} alt="" /></a>
            <a href="https:///www.facebook.com/cerciber/" target="_blank"><img class="icon" src={process.env.PUBLIC_URL + '/Images/icon_facebook.png'} alt="" /></a>
            <a href="https://twitter.com/cerciber/" target="_blank"><img class="icon" src={process.env.PUBLIC_URL + '/Images/icon_twitter.png'} alt="" /></a>
            <a href="https://www.linkedin.com/in/cesartorres-cerciber/" target="_blank"><img class="icon" src={process.env.PUBLIC_URL + '/Images/icon_linkedin.png'} alt="" /></a>
            <a href="https://www.instagram.com/cerciber/" target="_blank"><img class="icon" src={process.env.PUBLIC_URL + '/Images/icon_instagram.png'} alt="" /></a>
            <a href="https://www.youtube.com/channel/UCRApjHfKXfdGm08fuqepVXg/" target="_blank"><img class="icon" src={process.env.PUBLIC_URL + '/Images/icon_youtube.png'} alt="" /></a>
          </div>
          <div class="user">
            <div class="photo">
              <img class="profilePhoto" src={process.env.PUBLIC_URL + '/Images/Photo.jpg'} alt="Photo" />
            </div>
            <div class="name">
              Cesar Augusto <br /> Torres Ardila
					  </div>
          </div>
          <div  class="titleContent">
            <div class="title">
              Cerciber
            </div>
          </div>
        </div>
        <nav class="tabs">
          <ul>
          <li class="tab" onClick={() => this.setState({scene: Constants.CONTACT_SCENE})}>Contacto</li> 
            <li class="tab" onClick={() => this.setState({scene: Constants.ABOUT_ME_SCENE})}>Acerca de</li>
            <div class="tab tab2"> 
              <li class="tabContent" onClick={() => this.setState({scene: Constants.PORTFOLIO_SCENE})}>Portafolio</li>
              <ul class="subtabs">
                <li class="subtab" onClick={() => this.setState({scene: Constants.TRIM_CODE_SCENE})}>TrimCode</li>
                <li class="subtab" onClick={() => this.setState({scene: Constants.QUICK_LIST_SCENE})}>QuickList</li>
                <li class="subtab" onClick={() => this.setState({scene: Constants.FIND_CODE_SCENE})}>FindCode</li>
                <li class="subtab" onClick={() => this.setState({scene: Constants.STRUCT_FILE_SCENE})}>StructFile</li>
                <li class="subtab" onClick={() => this.setState({scene: Constants.TANK_ATTACT_SCENE})}>TankAttack</li>
              </ul>
            </div>
          </ul>
        </nav>
        <div class="content">
          <Content callbackFromParent={this.callback} scene={this.state.scene}></Content>
        </div>
      </div>
    );
  }
}

// Exportaciones
export default Structure;  
