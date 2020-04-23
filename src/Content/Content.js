
// Importaciones
import React from 'react';      // React
import * as Constants from './../Information/Constants';
import about_me from "./../Information/about-me.json";
import contact from "./../Information/contact.json";
import findcode from "./../Information/findcode.json";
import portfolios from "./../Information/portfolios.json";
import quicklist from "./../Information/quicklist.json";
import tankattack from "./../Information/tankattack.json";
import trimcode from "./../Information/trimcode.json";
import structfile from "./../Information/structfile.json";
import Characteristics from "./../modules/Characteristics";
import Description from "./../modules/Description";
import DescriptionImage from "./../modules/DescriptionImage";
import DescriptionImages from "./../modules/DescriptionImages";
import Images from "./../modules/Images";
import Presentation from "./../modules/Presentation";
import Slides from "./../modules/Slides";
import Title from "./../modules/Title";

//const [isVisible, setVisible] = React.useState(true);

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {jsonContent: ""};
  }

  callback = (dataFromChild) => {
    this.props.callbackFromParent(dataFromChild)
  }

  createContent() {

    // Asignar contenido
    switch (this.props.scene) {
      case Constants.ABOUT_ME_SCENE:
        this.state.jsonContent = about_me;
        break;
      case Constants.PORTFOLIO_SCENE:
        this.state.jsonContent = portfolios;
        break;
      case Constants.CONTACT_SCENE:
        this.state.jsonContent = contact;
        break;
      case Constants.TRIM_CODE_SCENE:
        this.state.jsonContent = trimcode;
        break;
      case Constants.QUICK_LIST_SCENE:
        this.state.jsonContent = quicklist;
        break;
      case Constants.FIND_CODE_SCENE:
        this.state.jsonContent = findcode;
        break;
      case Constants.TANK_ATTACT_SCENE:
        this.state.jsonContent = tankattack;
        break;
      case Constants.STRUCT_FILE_SCENE:
        this.state.jsonContent = structfile;
        break;
    }

    var content = [];
    for (var i = 0; i < this.state.jsonContent.length; i++) {
      switch (this.state.jsonContent[i].type) {
        case "characteristics":
          content.push(<div class="baseModule"><Characteristics info={this.state.jsonContent[i].info}></Characteristics></div>);
          break;
        case "description":
          content.push(<div class="baseModule"><Description info={this.state.jsonContent[i].info}></Description></div>);
          break;
        case "description-image":
          content.push(<div class="baseModule"><DescriptionImage callbackFromParent={this.callback} info={this.state.jsonContent[i].info}></DescriptionImage></div>);
          break;
        case "description-images":
          content.push(<div class="baseModule"><DescriptionImages info={this.state.jsonContent[i].info}></DescriptionImages></div>);
          break;
        case "images":
          content.push(<div class="baseModule"><Images info={this.state.jsonContent[i].info}></Images></div>);
          break;
        case "presentation":
          content.push(<div class="baseModule"><Presentation info={this.state.jsonContent[i].info}></Presentation></div>);
          break;
        case "slides":
          content.push(<div class="baseModule"><Slides info={this.state.jsonContent[i].info}></Slides></div>);
          break;
        case "title":
          content.push(<div class="baseModule"><Title info={this.state.jsonContent[i].info}></Title></div>);
          break; 
      }
    }
    return content;
  }

  render() {
    return <div class="content">{this.createContent()}</div>;
  }

}

// Exportaciones
export default Content;  
