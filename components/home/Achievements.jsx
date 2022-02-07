const Achievements = () => {
   return (
      <section className="achievements">
         <section className="achievements__banner">
            <h3>Renocimientos</h3>
         </section>
         <section className="achievements__content container">
            <p>A lo largo de nuestra historia hemos podido conseguir ciertos reconocimientos, los cuales son prueba que brindamos un servicio de calidad. Formamos, y somos reconocidos por:</p>
            <article className="achievements__grid">
               <div className="achievement__card">
                  <p>La Asociación Salvadoreña de distribuidores de vehículos</p>
               </div>
               <div className="achievement__card">
                  <p>Empresa acreditada por la Superintendencia del Sistema Financiero</p>
               </div>
            </article>
         </section>
      </section>
   );
}
 
export default Achievements;