import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
/* components */
import Photo from './Photo';
import PdfViewer from './PdfViewer';
/* helpers */
import { carrouselHelper, carrouselHelperMobile } from '../../helpers/carrouselHelper';
/* assets */
import {
   FaCarCrash,
   FaTools,
   FaFileAlt,
   FaImage,
   FaFilePdf
} from 'react-icons/fa';
import { FiChevronDown, FiX } from 'react-icons/fi';
import { reviewExample } from '../../public/data';

const ProcessCarrousel = () => {
   /* states */
   const [slideTitle, setSlideTitle] = useState(reviewExample.step1.title);
   const [slideContent, setSlideContent] = useState(reviewExample.step1.content);
   const [isTargetPdf, setIsTargetPdf] = useState(false);
   const [showNavbar, setShowNavbar] = useState(false);
   const [windowWidth, setWindowWidth] = useState(0);

   /* useEffect to know window width */
   useEffect(() => {
      setWindowWidth(window.innerWidth);
   }, []);

   /* handleCarrousel */
   const handleCarrousel = ({ target }) => {
      const carrouselControls = [...document.querySelectorAll('.btn--control')];
      carrouselHelper(target, carrouselControls, setSlideTitle, setSlideContent, setIsTargetPdf);
   };

   /* handleCarrouselMobile */
   const handleCarrouselMobile = ({ target }) => {
      carrouselHelperMobile(target, setSlideTitle, setSlideContent, setIsTargetPdf, setShowNavbar);
   };

   /* variants */
   const navbarMotion = {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
   };

   return (
      <section className="process__carrousel container">
         { windowWidth < 768 ?
            <nav className="carrousel--controls-mobile">
               <div
                  className='carrousel__selected'
                  onClick={ () => setShowNavbar(!showNavbar) }>
                  <span className='carrousel--label'>Menú</span>
                  { !showNavbar ?
                     <FiChevronDown className='label--icon' />
                     :
                     <FiX className='label--icon' />
                  }
               </div>
               <AnimatePresence exitBeforeEnter>
                  { showNavbar &&
                     <motion.nav
                        className='navbar__buttons navbarMotion'
                        variants={ navbarMotion }
                        initial="hidden"
                        animate="visible"
                        exit="hidden">
                        <button
                           className='btn btn--control active'
                           id='step1'
                           onClick={ handleCarrouselMobile }>
                           Diagnóstico estético
                           <FaCarCrash className='btn--icon' />
                        </button>
                        <button
                           className='btn btn--control'
                           id='step2'
                           onClick={ handleCarrouselMobile }>
                           Evalúo mecánico
                           <FaTools className='btn--icon' />
                        </button>
                        <button
                           className='btn btn--control'
                           id='step3'
                           onClick={ handleCarrouselMobile }>
                           Elaboración del avalúo
                           <FaFileAlt className='btn--icon' />
                        </button>
                        <button
                           className='btn btn--control'
                           id='media'
                           onClick={ handleCarrouselMobile }>
                           Imagénes
                           <FaImage className='btn--icon' />
                        </button>
                        <button
                           className='btn btn--control'
                           id='pdf'
                           onClick={ handleCarrouselMobile }>
                           Ejemplo de Avalúo
                           <FaFilePdf className='btn--icon' />
                        </button>
                     </motion.nav>
                  }
               </AnimatePresence>
            </nav>
            :
            <nav className="carrousel__controls">
               <button
                  className='btn btn--control active'
                  id='step1'
                  onClick={ handleCarrousel }>
                  <FaCarCrash className='btn--icon' />
                  Diagnóstico estético
               </button>
               <button
                  className='btn btn--control'
                  id='step2'
                  onClick={ handleCarrousel }>
                  <FaTools className='btn--icon' />
                  Diagnóstico mecánico
               </button>
               <button
                  className='btn btn--control'
                  id='step3'
                  onClick={ handleCarrousel }>
                  <FaFileAlt className='btn--icon' />
                  Elaboración del avalúo
               </button>
               <button
                  className='btn btn--control'
                  id='media'
                  onClick={ handleCarrousel }>
                  <FaImage className='btn--icon' />
                  Imagénes
               </button>
               <button
                  className='btn btn--control'
                  id='pdf'
                  onClick={ handleCarrousel }>
                  <FaFilePdf className='btn--icon' />
                  Ejemplo de Avalúo
               </button>
            </nav>
         }
         <article className="carrousel__slide">
            { !Array.isArray(slideContent) && !isTargetPdf ?
               <>
                  <h4 className='slide__title'>{ slideTitle }</h4>
                  <p className='slide__content'>{ slideContent }</p>
               </>
               :
               <>
                  { !isTargetPdf ?
                     <>
                        <h4 className='slide__title'>{ slideTitle }</h4>
                        <article className="photos__grid">
                           { slideContent.map(({ id, img })=> {
                              return (
                                 <Photo
                                    key={ id }
                                    imageSrc={ img }
                                 />
                              );
                           }) }
                        </article>
                     </>
                     :
                     <PdfViewer
                        setSlideTitle={ setSlideTitle }
                        setSlideContent={ setSlideContent }
                        setIsTargetPdf={ setIsTargetPdf }
                     />
                  }
               </>
            }
         </article>
      </section>
   );
}
 
export default ProcessCarrousel;