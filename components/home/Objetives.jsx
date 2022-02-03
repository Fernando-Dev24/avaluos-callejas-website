/* next */
import Image from 'next/image';
import { useState } from 'react';
/* helpers */
import { getObjetive } from '../../helpers/getObjetive';
/* assets */
import objetivesIllustration from '../../assets/images/objetives__illustration.webp';
import { goals } from '../../public/data';

const Objetives = () => {
   const [objetiveTitle, setObjetiveTitle] = useState(goals.mission.title);
   const [objetiveInfo, setObjetiveInfo] = useState(goals.mission.info);
   
   /* handleState */
   const handleState = ({ target }) => {
      getObjetive( target.id, setObjetiveTitle, setObjetiveInfo );
      const objetiveButtons = [...document.querySelectorAll('.btn--slider')];
      objetiveButtons.forEach(() => {
         const restOfButtons = objetiveButtons.filter(({ id }) => id !== target.id);
         restOfButtons.forEach((button) => button.classList.remove('active'));
      });
      target.classList.add('active');
   };

   return (
      <section className="objetives">
         <section className="objetives__content">
            <section className="objetives__slider">
               <article className="slide">
                  <h3 className='title-line'>{ objetiveTitle }</h3>
                  <p className='title-info'>{ objetiveInfo }</p>
               </article>
               <nav className="slider__controls">
                  <button
                     className='btn btn--slider active'
                     id='mision'
                     onClick={ handleState }>
                     Misión
                  </button>
                  <button
                     className='btn btn--slider'
                     id='vission'
                     onClick={ handleState }>
                     Visión
                  </button>
                  <button
                     className='btn btn--slider'
                     id='team'
                     onClick={ handleState }>
                     Equipo
                  </button>
               </nav>
            </section>
            <figure className='objetives__illustration'>
               <Image
                  src={ objetivesIllustration.src }
                  alt="Camioneta blanca ilustración"
                  width={ objetivesIllustration.width }
                  height={ objetivesIllustration.height }
               />
            </figure>
         </section>
      </section>
   );
}
 
export default Objetives;