// Importaciones
import React from "react"; // React
import "./Portfolio.css";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="portfolio">
        <div className="portfolio-card">
          <div className="portfolio-card-title">SigMath (2020)</div>
          <div className="portfolio-card-image-content">
            <img
              className="portfolio-card-image"
              src={process.env.PUBLIC_URL + "/Images/sigmath1.png"}
              alt=""
            />
          </div>
          <div className="portfolio-card-content">
            Creación de una Aplicación Web que le permite a los usuarios{" "}
            <b>gestionar fichas matemáticas personalizadas</b> para realizar
            matemática de forma rápida, sencilla y colaborativa.
            <br />
          </div>
        </div>
        <div className="portfolio-card">
          <div className="portfolio-card-title">UnAcarreo (2020)</div>
          <div className="portfolio-card-image-content">
            <img
              className="portfolio-card-image"
              src={process.env.PUBLIC_URL + "/Images/unacarreo.png"}
              alt=""
            />
          </div>
          <div className="portfolio-card-content">
            Creación de una Aplicación Web para un <b>sistema de acarreos</b> en
            tiempo real en donde los clientes pueden contratar servicios de
            forma rápida.
          </div>
        </div>
        <div className="portfolio-card">
          <div className="portfolio-card-title">TrimCode (2020)</div>
          <div className="portfolio-card-image-content">
            <img
              className="portfolio-card-image"
              src={process.env.PUBLIC_URL + "/Images/trimcode1.png"}
              alt=""
            />
          </div>
          <div className="portfolio-card-content">
            Creación de una Desktop application para la{" "}
            <b>organización y ejecución rápida de algoritmos</b> en el sistema
            operativo con distintos lenguajes de programación.
          </div>
        </div>
        <div className="portfolio-card">
          <div className="portfolio-card-title">StructFile (2019-2020)</div>
          <div className="portfolio-card-image-content">
            <img
              className="portfolio-card-image"
              src={process.env.PUBLIC_URL + "/Images/structfile1.png"}
              alt=""
            />
          </div>
          <div className="portfolio-card-content">
            Creación de un <b>lenguaje de programación</b> dedicado al
            tratamiento de texto plano, archivos y directorios en base a
            expresiones regulares.
          </div>
        </div>
        <div className="portfolio-card">
          <div className="portfolio-card-title">FindCode (2017)</div>
          <div className="portfolio-card-image-content">
            <img
              className="portfolio-card-image"
              src={process.env.PUBLIC_URL + "/Images/findcode1.png"}
              alt=""
            />
          </div>
          <div className="portfolio-card-content">
            Creación de una Desktop application para{" "}
            <b>almacenar, organizar y documentar piezas de código</b> de forma
            interactiva y colaborativa.
          </div>
        </div>
        <div className="portfolio-card">
          <div className="portfolio-card-title">TankAttack (2016)</div>
          <div className="portfolio-card-image-content">
            <img
              className="portfolio-card-image"
              src={process.env.PUBLIC_URL + "/Images/tankattack16.png"}
              alt=""
            />
          </div>
          <div className="portfolio-card-content">
            Creación de una Desktop application para un{" "}
            <b>juego multijugador local de tanques</b> con captura la bandera en
            niveles generados aleatoriamente.
          </div>
        </div>
        <div className="portfolio-card">
          <div className="portfolio-card-title">QuickList (2014-2015)</div>
          <div className="portfolio-card-image-content">
            <img
              className="portfolio-card-image"
              src={process.env.PUBLIC_URL + "/Images/quicklist72.jpg"}
              alt=""
            />
          </div>
          <div className="portfolio-card-content">
            Creación de una Desktop application para un{" "}
            <b>
              sistema de integración de responsabilidades
              administrativo-académicas
            </b>{" "}
            para el SENA.
          </div>
        </div>
      </div>
    );
  }
}

// Exportaciones
export default Portfolio;
