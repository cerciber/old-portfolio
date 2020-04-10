// Componente base de la aplicación

// Importaciones
import React from 'react';      // React

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.evento = this.evento.bind(this);
  }

  evento() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.evento}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

// Función de contenido del componente base
function App() {
  return <Toggle></Toggle>;
}

// Exportaciones
export default App;     // Contendio del componente base
