import { Document, Page, pdfjs } from 'react-pdf';
import { useState, useEffect } from 'react';
import React from 'react';
import styles from '../components/resume.module.css';
import Navbar from '../components/navbar.jsx';


function Resume() {
   useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
  }, []);
  const [numPages, setNumPages] = useState(null);
 
  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
      <div className={styles.pdfdoc}>
      <Navbar />
      <Document file='./resume.pdf' onLoadSuccess={onLoadSuccess}>
        {[...Array(numPages)].map((_, index) => (
          <Page key={index} pageNumber={index + 1} scale={1.8} renderMode="canvas" renderTextLayer={false} renderAnnotationLayer={false}/>
        ))}
      </Document>
      </div>
  );
}

export default Resume;
