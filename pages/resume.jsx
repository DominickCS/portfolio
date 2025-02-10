import { Document, Page, pdfjs } from 'react-pdf';
import { useState, useEffect } from 'react';
import React from 'react';
import styles from '../components/resume.module.css';

function Resume() {
 useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs.worker.min.mjs";
  }, []); 
  const [numPages, setNumPages] = useState(null);
    
  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
      <div id={styles.pdfdoc}>
      <Document file='../public/resume.pdf' onLoadSuccess={onLoadSuccess}>
        {[...Array(numPages)].map((_, index) => (
          <Page key={index} pageNumber={index + 1} scale={1.8} renderMode="canvas" renderTextLayer={false} renderAnnotationLayer={false}/>
        ))}
      </Document>
      </div>
  );
}

export default Resume;
