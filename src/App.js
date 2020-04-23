// Componente base de la aplicación

// Importaciones
import React from 'react';      // React
import Structure from './structure/Structure';   
import {Route, Switch} from 'react-router-dom';
import * as Constants from './Information/Constants';

class App extends React.Component {
  render() {
    return (
      <Structure scene={Constants.PORTFOLIO_SCENE}/>
    );
  }
}

// Exportaciones
export default App;   
