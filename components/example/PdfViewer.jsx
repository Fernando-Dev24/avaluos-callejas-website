import { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
/* assets */
import fileExample from '../../public/CV.pdf';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { reviewExample } from '../../public/data';

const PdfViewer = ({ setIsTargetPdf, setSlideTitle, setSlideContent }) => {
   /* states */
   const [numPages, setNumPages] = useState(null);
   const [pageNumber, setPageNumber] = useState(1);
   const [isPdfRendered, setIsPdfRendered] = useState(false);
   const [windowWidth, setWindowWidth] = useState(0);

   /* Effect to get window width */
   useEffect(() => setWindowWidth(window.innerWidth), []);

   /* handleLoadSuccess */
   const handleLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
      setIsPdfRendered(true);
   };

   /* handleChangePage */
   const handleChangePage = ({ target }) => {
      if( target.id === 'previous' ) setPageNumber(pageNumber - 1);
      else if( target.id === 'next' ) setPageNumber(pageNumber + 1);
   };

   /* handleCloseModal */
   const handleCloseModal = () => {
      setSlideTitle(reviewExample.step1.title);
      setSlideContent(reviewExample.step1.content);
      setIsTargetPdf(false);
   };

   /* useEffect to validate if user is watching the last page of the PDF or not */
   useEffect(() => {
      if( isPdfRendered ) {
         const pdfControls = [...document.querySelectorAll('.btn--pdf-control')];
         if ( pageNumber === 1 ) {
            pdfControls.forEach((button) => button.classList.remove('disable'));
            pdfControls[0].classList.add('disable');
         } else if( pageNumber === numPages ) {
            pdfControls.forEach((button) => button.classList.remove('disable'));
            pdfControls[1].classList.add('disable');
         } else if( pageNumber !== 1 && pageNumber !== numPages ) {
            pdfControls.forEach((button) => button.classList.remove('disable'));
         }
      };
   }, [pageNumber, numPages, windowWidth, isPdfRendered]);
   
   return (
      <>
         { windowWidth > 768 ?
            <section className="pdf__viewer">
               <article className="pdf__document">
                  <Document
                     file={ fileExample }
                     options={{ WorkerSrc: "pdf.worker.js" }}
                     loading={ "Cargando PDF..." }
                     error={"Error al cargar archivo PDF, vuelve a intentarlo"}
                     onLoadSuccess={ handleLoadSuccess }>
                     <Page
                        pageNumber={ pageNumber }
                        loading={ `Cargando página ${ pageNumber }...` }
                     />
                  </Document>
                  <nav className='pdf__controls'>
                     <button
                        id='previous'
                        className='btn btn--pdf-control disable'
                        onClick={ handleChangePage }>
                        <FiChevronLeft className='btn--icon' />
                     </button>
                     <span className='control-label'>{ pageNumber } de { numPages }</span>
                     <button
                        id='next'
                        className='btn btn--pdf-control'
                        onClick={ handleChangePage }>
                        <FiChevronRight className='btn--icon' />
                     </button>
                  </nav>
               </article>
            </section>
            :
            <section className="pdf-viewer-shadow">
               <article className="pdf-viewer-mobile">
                  <Document
                     file={ fileExample }
                     options={{ WorkerSrc: "pdf.worker.js" }}
                     loading={ "Cargando archivo PDF..." }
                     error={ "Error al cargar archivo PDF, vuelve a intentarlo" }
                     onLoadSuccess={ handleLoadSuccess }>
                     <Page
                        pageNumber={ pageNumber }
                        className="pdf-page"
                     />
                  </Document>
                  <nav className='pdf-controls--mobile'>
                     <button
                        className='btn btn--pdf-control disable'
                        id='previous'
                        onClick={ handleChangePage }>
                        <FiChevronLeft className='btn--icon' />
                     </button>
                     <span className='control-label'>
                        { pageNumber } de { numPages }
                     </span>
                     <button
                        className='btn btn--pdf-control'
                        id='next'
                        onClick={ handleChangePage }>
                        <FiChevronRight className='btn--icon' />
                     </button>
                  </nav>
                  <button
                     className='btn btn--close-modal'
                     onClick={ handleCloseModal }>
                     <FiX className='btn--icon' />
                  </button>
               </article>
            </section>
         }
      </>
   );
};
 
export default PdfViewer;