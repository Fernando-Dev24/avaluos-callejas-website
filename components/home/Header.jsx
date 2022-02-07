/* next */
import Link from "next/link";
import Image from "next/image";
/* react */
import { useState, useEffect } from 'react';
/* third-party libraries */
import { motion, AnimatePresence } from 'framer-motion'
/* icons */
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
/* assets */
import { links } from '../../public/data';

/* variants */
const navbarMobile = {
   visible: { opacity: 1 },
   hidden: { opacity: 0 },
};

const Header = () => {
   const { facebook, instagram, whatsApp } = links;
   /* states */
   const [showNavbar, setShowNavbar] = useState(false);
   const [windowWidth, setWindowWidth] = useState(0);

   /* effect that validate window width */
   useEffect(() => {
      setWindowWidth(window.innerWidth);
   }, [windowWidth]);

   return (
      <>
         <header className="home-header">
            <nav className="container navbar">
               <Link
                  href="/">
                  <a className="title-link">
                     <h1>Avalúos Callejas & Asociados</h1>
                  </a>
               </Link>
               { windowWidth <= 768 ?
                  <>
                     { !showNavbar ?
                        <FiMenu
                           className="menu--icon"
                           onClick={ () => setShowNavbar(true) }
                        />
                        :
                        <FiX
                           className="menu--icon"
                           onClick={ () => setShowNavbar(false) }
                        />
                     }
                     <AnimatePresence exitBeforeEnter>
                        { showNavbar &&
                           <motion.div
                              className="navbar__links navbarMobile"
                              variants={ navbarMobile }
                              initial="hidden"
                              animate="visible"
                              exit="hidden">
                              <Link
                                 href="/example">
                                 <a className="btn btn--eg-review">Proceso Completo de Avalúo</a>
                              </Link>
                              <Link
                                 href="/delivery">
                                 <a className="btn btn--eg-review">Reserva un avalúo a domicilio</a>
                              </Link>
                              <hr />
                              <a
                                 href={ facebook }
                                 className="btn btn--social facebook">
                                 Facebook
                                 <FaFacebookSquare className="btn--icon" />
                              </a>
                              <a
                                 href={ instagram }
                                 className="btn btn--social instagram">
                                 Instagram
                                 <FaInstagram className="btn--icon" />
                              </a>
                              <a
                                 href={ instagram }
                                 className="btn btn--social whatsapp">
                                 WhatsApp
                                 <FaWhatsapp className="btn--icon" />
                              </a>
                           </motion.div>
                        }
                     </AnimatePresence>
                  </>
                  :
                  <div className="navbar__links">
                     <Link
                        href="/example">
                        <a className="btn btn--eg-review">Conoce nuestro proceso de avalúo</a> 
                     </Link>
                     <Link
                        href={ whatsApp }>
                        <a className="btn btn--review">Reserva un avalúo a domicilio</a>
                     </Link>
                  </div>
               }
            </nav>

            <section className="header__title container">
               <span>Antes de hacer algo con tu vehículo</span>
               <h2>Revisa el auto que quieras comprar.</h2>
            </section>

            { windowWidth > 768 &&
               <nav className="container social__media">
                  <a
                     href={ facebook }
                     className="social__media-link">
                     <FaFacebookSquare />
                  </a>
                  <a
                     href={ instagram }
                     className="social__media-link">
                     <FaInstagram />
                  </a>
                  <a
                     href={ whatsApp }
                     className="social__media-link">
                     <FaWhatsapp />
                  </a>
               </nav>
            }
         </header>
      </>
   );
}
 
export default Header;