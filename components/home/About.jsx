/* next */
import Image from 'next/image';
/* data */
import { alliedCompanies } from '../../public/data';

const About = () => {
   return (
      <section className="container about__us">
         <h3 className='title-line'>¿Quiénes somos?</h3>
         <article className="about__us-info">
            <p className="about">
               <strong className='company-name'>Avalúos Callejas </strong>
               fue fundada por emprendedores salvadoreños que como tu creemos en nuestro país. Con el paso de los años, nos hemos convertido en una opción real de servicio, en el ramo del avalúo automotriz.
            </p>
            <p className='about'>Ofrecemos a nuestros clientes un servicio de calidad en tarifas competitivas. Nuestro principal objetivo siempre será volvernos tu aliado al momento que pienses comprar o vender un vehiculo. Nuestro servicio básicamente consta de un avalúo completo y diagnóstico automotriz. Contamos con un fundador de más de 20 años en el ramo de evaluación de vehículos, maquinaria, y otros medios de transporte. Además, contamos con la confianza de empresas altamente conocidas en la rama automotriz, así como de importantes financieras, cooperativas, y bancos del país. Las siguiente empresas cuentan con nuestra confianza y servicios:</p>
         </article>

         <article className="allied-companies__grid">
            { alliedCompanies.map(({ id, logo, title }) => {
               return (
                  <article className="company" key={ id }>
                     <div className='company__content'>
                        <div className="company__image">
                           <Image
                              src={ logo.src }
                              alt={ title }
                              width={ logo.width }
                              height={ logo.height }
                           />
                        </div>
                        <h3>{ title }</h3>
                     </div>
                  </article>
               );
            }) }
         </article>
      </section>
   );
}
 
export default About;