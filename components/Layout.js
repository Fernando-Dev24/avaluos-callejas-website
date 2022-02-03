import Head from "next/head";
/* assets */
import favicon from '../assets/icons/favicon.svg';

const Layout = ({ children }) => {
   return (
      <>
         <Head>
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta
               name="description"
               content="Centro de avalúos de vehículos y maquinaria pesada. Antes de comprar, o vender un vehículo, conozca el precio justo y actual teniendo en cuenta, hasta el más minímo detalle del mismo."
            />
            <link
               rel="shortcut icon"
               href={ favicon.src }
               sizes="32x32"
               type="image/x-icon"
            />
            <title>Avalúos Callejas & Asociados</title>
         </Head>
         { children }
      </>
   );
}
 
export default Layout;