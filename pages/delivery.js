import Head from 'next/head';
import Layout from '../components/Layout';
/* components */
import Stop from '../components/delivery/Stop';

const Delivery = () => {
   return (
      <>
         <Head>
            <title>Reserva avalúo a domicilio</title>
         </Head>
         <Layout>
            <Stop />
         </Layout>
      </>
   );
};
 
export default Delivery;