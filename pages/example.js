import Head from 'next/head';
import Layout from '../components/Layout';
/* components */
import VehicleExample from '../components/example/VehicleExample';
import ProcessCarrousel from '../components/example/ProcessCarrousel';

const Example = () => {
   return (
      <>
         <Head>
            <title>Proceso completo de Avalúo</title>
         </Head>
         <Layout>
            <VehicleExample />
            <ProcessCarrousel />
         </Layout>
      </>
   );
}
 
export default Example;