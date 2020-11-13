// Importaciones
import React from "react"; // React
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="contact">
        <div className="contact-message">
          Si desean comunicarse conmigo o conocer un poco mas acerca de mi
          pueden hacerlo a través de estos medios:
        </div>
      </div>
    );
  }
}

// Exportaciones
export default Contact;
