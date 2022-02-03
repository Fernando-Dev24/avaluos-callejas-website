/* icons */
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
/* assets */
import { links } from '../../public/data';

const Footer = () => {
   const { facebook, instagram, whatsApp } = links;
   
   return (
      <footer className="footer">
         <section className="location container">
            <article className="location__content">
               <h4>Nuestra Ubicación</h4>
               <p>Entrada principal Colonia San Mateo, 51 Avénida Sur, #1318, pasaje al costado izquierdo de Baterías LTH, San Salvador, El Salvador</p>
            </article>
            <figure className='location__map'>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.494243074147!2d-89.21995188549235!3d13.688489002446246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63305a9b731e4f%3A0xad16fce299028a7d!2sAval%C3%BAos%20Callejas!5e0!3m2!1ses-419!2ssv!4v1643294420835!5m2!1ses-419!2ssv" width="400" height="300" style={{ border: '0' }} title='Ubicación de Avalúos Callejas & Asociados' loading="lazy" id='location-map' />
            </figure>
         </section>
         <section className="footer__content container">
            <article className="footer__disclaimer">
               <h4>Avalúos Callejas & Asociados</h4>
               <p>Todas las imagénes que se muestran en este sitio han sido extraídas de sitios, o plataformas confiables y de libre uso. Así mismo, toda la información aquí presentada es propiedad de Avalúos Callejas's & Asociados.</p>
               <p>Avalúos Calleja's & Asociados { new Date().getFullYear() } | Todos los derechos reservados</p>
            </article>
            <article className="footer__links">
               <h4>Enlaces que podría interesarte</h4>
               <nav className='links__grid'>
                  <a
                     href={ facebook }
                     className='footer__link'>
                     <FaFacebookSquare className='link--icon' />
                     @avaluoscallejas
                  </a>
                  <a
                     href={ instagram }
                     className='footer__link'>
                     <FaInstagram className='link--icon' />
                     @avaluos_callejas
                  </a>
                  <a
                     href={ whatsApp }
                     className='footer__link'>
                     <FaWhatsapp className='link--icon' />
                     +503 70347570
                  </a>
               </nav>
            </article>
         </section>
      </footer>
   );
}
 
export default Footer;