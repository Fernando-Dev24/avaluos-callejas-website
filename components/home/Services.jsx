import { services } from '../../public/data';

const Services = () => {
   /* handleActive */
   const handleActive = ({ target }) => {
      const allServices = [...document.querySelectorAll('.service')];
      allServices.forEach(( service ) => service.classList.remove('active'));
      target.classList.add('active');
   };

   return (
      <section className='services container'>
         <h3 className='title-line'>¿En qué consiste nuestro servicio?</h3>
         <section className="services__grid">
            { services.map(({ id, number, title, content }) => {
               return (
                  <article
                     key={ id }
                     className='service'
                     onMouseEnter={ handleActive }>
                     <span>{ number }</span>
                     <h4>{ title }</h4>
                     <p>{ content }</p>
                  </article>
               );
            }) }
         </section>
      </section>
   );
}
 
export default Services;