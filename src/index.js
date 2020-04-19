// Codigo principal

// Importaciones
import React from 'react';          // React
import ReactDOM from 'react-dom';   // Modelo de Objetos del Documento virtual
import App from './App';            // Componente base
import { BrowserRouter } from 'react-router-dom';

// Renderizar componente base
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('App'));
