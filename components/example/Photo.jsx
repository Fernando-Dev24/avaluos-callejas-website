/* next */
import Image from 'next/image';
/* react */
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
/* assets */
import { FiMinimize2 } from 'react-icons/fi';

const Photo = ({ imageSrc }) => {
   const [zoomElement, setZoomElement] = useState(false);

   /* handleZoom */
   const handleZoom = () => setZoomElement(true);

   /* handleCloseModal */
   const handleCloseModal = () => setZoomElement(false);

   /* variants */
   const modal = {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
   };

   return (
      <>
         <figure
            className='photo'>
            <Image
               src={ imageSrc.src }
               alt="Fotografía de ejemplo, al momento de avalúo, fotos frontales, traseras, costados, e interiores"
               width={ imageSrc.width }
               height={ imageSrc.height }
               onClick={ handleZoom }
            />
         </figure>
         <AnimatePresence exitBeforeEnter>
            { zoomElement &&
               <motion.article
                  className='shadow__modal modal'
                  variants={ modal }
                  initial="hidden"
                  animate="visible"
                  exit="hidden">
                  <article className="zoom__modal">
                     <Image
                        src={ imageSrc.src }
                        alt="Fotografía de ejemplo, al momento de avalúo, fotos frontales, traseras, costados, e interiores"
                        width={ imageSrc.width }
                        height={ imageSrc.height }
                        className='zoom-image'
                     />
                     <button
                        className='btn btn--close-modal'
                        onClick={ handleCloseModal }>
                        <FiMinimize2 className='btn--icon' />
                     </button>
                  </article>
               </motion.article>
            }
         </AnimatePresence>
      </>
   );
}
 
export default Photo;