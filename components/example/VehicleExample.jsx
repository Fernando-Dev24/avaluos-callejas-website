const VehicleExample = () => {
   return (
      <>
         <section className="vehicle__example container">
            <article className="example__intro">
               <span>Ejemplo de avalúo - Vehículo a evaluar</span>
               <h2>Kia Picanto 2017</h2>
               <p>Automático | 4x2 | Agencia | 4 asientos | Amarillo</p>
            </article>
            <article className="example__details">
               <div className="detail__container">
                  <p>
                     <strong className="detail__title">Odómetro: </strong>
                     119,400 kilómetros
                  </p>
               </div>
               <div className="detail__container">
                  <p>
                     <strong className="detail__title">Extras: </strong>
                     Aire acondionado, sube vidrios eléctricos, radio, CD player, conexión para auxiliar, USB, Bluetooth, sensores, asientos de tela, cámara.
                  </p>
               </div>
               <div className="detail__container">
                  <p>
                     <strong className="detail__title">Diagnóstico estético: </strong>
                     Rayones, y camanances en carrocería delantera, bumper izquierdo desajustado, rejilla de ventilación central de tablero rota, necesita limpieza, profunda de interiores.
                  </p>
               </div>
               <div className="detail__container">
                  <p>
                     <strong className="detail__title">Diagnóstico mecánico: </strong>
                     Cambiar bujías, aceite, y filtro de aceite del motor por desgaste, cambiar escobillas frontales, y delanteras por desgaste, cambiar llantas delanteras, y traseras debido a daño en banda de rodamiento.
                  </p>
               </div>
            </article>
         </section>

         <section className="process__content container">
            <article className="process__intro">
               <h2 className="title-line">Proceso del avalúo</h2>
               <p>Todos los vehículos recibidos en Avalúos Callejas & Asociados tienen que pasar un proceso para ser evaluados. Dicho proceso busca brindar un diagnóstico y valor comercial del vehículo sujeto de valuación. Al final de este proceso, el cliente recibirá un documento que incluye las características de su vehículo, su valor comercial y su valor para entrega en agencia. A continuación, conocerás dicho comercial y su valor para entrega en agencia. A continuación, conocerás dicho proceso paso a paso hasta que el vehículo puede serle entregado nuevamente.</p>
            </article>
         </section>
      </>

   );
}
 
export default VehicleExample;