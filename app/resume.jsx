import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import React from 'react';
import './styles/resumestyles.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function Resume() {
  const [numPages, setNumPages] = useState(null);
    
  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
      <div id="pdfdoc">
      <Document file='/resume.pdf' onLoadSuccess={onLoadSuccess}>
        {[...Array(numPages)].map((_, index) => (
          <Page key={index} pageNumber={index + 1} scale={1.8} renderMode="canvas" renderTextLayer={false} renderAnnotationLayer={false}/>
        ))}
      </Document>
      </div>
  );
}

export default Resume;
