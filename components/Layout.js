import Head from "next/head";

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
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
            <title>Avalúos Callejas & Asociados</title>
         </Head>
         { children }
      </>
   );
}
 
export default Layout;