// Componente base de la aplicación

// Importaciones
import React from 'react';      // React
import Structure from './structure/Structure';   
import {Route, Switch} from 'react-router-dom';
import * as Constants from './Information/Constants';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={() => <Structure scene={Constants.PORTFOLIO_SCENE}/>}/>
        <Route exact path="/about-me" component={() => <Structure scene={Constants.ABOUT_ME_SCENE} />}/>
        <Route exact path="/contact" component={() => <Structure scene={Constants.CONTACT_SCENE} />}/>
        <Route exact path="/portfolio/trimcode" component={() => <Structure scene={Constants.TRIM_CODE_SCENE} />}/>
        <Route exact path="/portfolio/quicklist" component={() => <Structure scene={Constants.QUICK_LIST_SCENE} />}/>
        <Route exact path="/portfolio/findcode" component={() => <Structure scene={Constants.FIND_CODE_SCENE} />}/>
        <Route exact path="/portfolio/tankattack" component={() => <Structure scene={Constants.TANK_ATTACT_SCENE} />}/>
      </Switch>
    );
  }
}

// Exportaciones
export default App;   
