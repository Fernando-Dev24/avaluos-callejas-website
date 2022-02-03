import Head from "next/head";
/* assets */
import favicon from '../assets/icons/favicon.svg';

const Layout = ({ children }) => {
   return (
      <main>
         <Head>
            <meta
               httpEquiv="Content-Type"
               content="text/html;charset=UTF-8"
               key="charset"
            />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
               key="viewport"
            />
            <meta
               name="description"
               content="Avaluós Callejas - Centro de avalúos de vehículos, maquinaria, con diagnóstico mecánico y estético, estético, pruebas completas a batería, motor, etc."
               key="description"
            />
            <link
               rel="shortcut icon"
               href={ favicon.src }
               sizes="32x32"
               type="image/x-icon"
            />
            <title>Avalúos Callejas & Asociados | Centro de avalúos, El Salvador</title>
         </Head>
         { children }
      </main>
   );
}
 
export default Layout;