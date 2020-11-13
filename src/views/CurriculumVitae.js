import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./CurriculumVitae.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function CurriculumVitae() {
  const setNumPages = useState(null)[1];

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="curriculum-vitae">
      <iframe className="document" src={require("./CV.pdf")} title="CV">
        Presss me: <a href="./resources/crayola.pdf">Download PDF</a>
      </iframe>
    </div>
  );
}

// Exportaciones
export default CurriculumVitae;
