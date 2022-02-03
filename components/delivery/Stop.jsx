import Link from "next/link";
import Image from "next/image";
/* assets */
import { FiTriangle } from 'react-icons/fi';
import stopIllustration from '../../assets/images/stop-illustration.svg';

const Stop = () => {
   return (
      <section className="stop">
         <article className="stop__content">
            <article className="stop__info">
               <Image
                  src={ stopIllustration.src }
                  alt="Odómetro tiene alto marcaje, alta velocidad recorrida"
                  width={ stopIllustration.width }
                  height={ stopIllustration.height }
               />
               <h3 className="title-line">¡El odómetro está muy alto!</h3>
               <p>El rediseño de nuestro sitio web fue solo el comienzo. Mantente al tanto de nuestras redes sociales para disfrutar de nuestro servicio a domicilio, completamente <strong>en línea</strong>.</p>
            </article>
            <Link
               href="/">
               <a className="btn btn--back">
                  <FiTriangle className="btn--icon" />
                  Regresar
               </a>
            </Link>
         </article>
      </section>
   );
}
 
export default Stop;