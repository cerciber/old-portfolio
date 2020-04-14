
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
import Characteristics from "./../modules/Characteristics";
import Description from "./../modules/Description";
import DescriptionImage from "./../modules/DescriptionImage";
import DescriptionImages from "./../modules/DescriptionImages";
import Images from "./../modules/Images";
import Presentation from "./../modules/Presentation";
import Slides from "./../modules/Slides";
import Title from "./../modules/Title";

class Content extends React.Component {

  constructor(props) {
    super(props);
  }

  createContent() {
    
    // Asignar contenido
    switch (this.props.scene) {
      case Constants.ABOUT_ME_SCENE:
        this.state = { jsonContent: about_me };
        break;
      case Constants.PORTFOLIO_SCENE:
        this.state = { jsonContent: portfolios };
        break;
      case Constants.CONTACT_SCENE:
        this.state = { jsonContent: contact };
        break;
      case Constants.TRIM_CODE_SCENE:
        this.state = { jsonContent: trimcode };
        break;
      case Constants.QUICK_LIST_SCENE:
        this.state = { jsonContent: quicklist };
        break;
      case Constants.FIND_CODE_SCENE:
        this.state = { jsonContent: findcode };
        break;
      case Constants.TANK_ATTACT_SCENE:
        this.state = { jsonContent: tankattack };
        break;
    }

    var content = [];
    for (var i = 0; i < this.state.jsonContent.length; i++) {
      switch (this.state.jsonContent[i].type) {
        case "characteristics":
          content.push(<Characteristics info={this.state.jsonContent[i].info}></Characteristics>);
          break;
        case "description":
          content.push(<Description info={this.state.jsonContent[i].info}></Description>);
          break;
        case "description-image":
          content.push(<DescriptionImage info={this.state.jsonContent[i].info}></DescriptionImage>);
          break;
        case "description-images":
          content.push(<DescriptionImages info={this.state.jsonContent[i].info}></DescriptionImages>);
          break;
        case "images":
          content.push(<Images info={this.state.jsonContent[i].info}></Images>);
          break;
        case "presentation":
          content.push(<Presentation info={this.state.jsonContent[i].info}></Presentation>);
          break;
        case "slides":
          content.push(<Slides info={this.state.jsonContent[i].info}></Slides>);
          break;
        case "title":
          content.push(<Title info={this.state.jsonContent[i].info}></Title>);
          break; 
      }
    }
    return content;
  }

  render() {
    return <div>{this.createContent()}</div>;
  }

}

// Exportaciones
export default Content;  
