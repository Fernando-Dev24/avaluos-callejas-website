/* next */
import Image from "next/image";
/* data */
import { alliedCompanies } from "../../public/data";

const About = () => {
  return (
    <section className="container about__us">
      <h3 className="title-line">
        ¿Quieres comprar un vehículo? <br />
        No dejes tu inversión al azar
      </h3>
      <article className="about__us-info">
        <p className="about">
          <strong className="company-name">En Avalúos Callejas </strong>
          nacimos del espíritu emprendedor salvadoreño con una misión clara: ser
          tu alidado estratégico. Sabemos que comprar un vehículo es un paso
          importante, por eso te brindamos la certeza técnica que necesitas para
          decidir con total seguridad.
        </p>
        <p className="about">
          <strong className="company-name">
            ¿Por qué confiar en nosotros?{" "}
          </strong>
          <ul>
            <li>
              Experiencia que respalda: Bajo la dirección de nuestro socio
              fundador, Milton Callejas, sumamos más de 25 años de trayectoria
              en el avalúo de vehículos, maquinaria y medios de transporte.
            </li>
            <li>
              Diagnóstico de precisión: Te entregamos un informe detallado sobre
              las condiciones reales y el valor comercial justo de tu futuro
              vehículo.
            </li>
            <li>
              Respaldo oficial: Somos una empresa acreditada por la
              Superintendencia del Sistema Financiero (SSF) y contamos con el
              apoyo de la Asociación de Distribuidores de Vehículos de El
              Salvador (ASALVE).
            </li>
          </ul>

          <p style={{ marginTop: "20px" }}>
            Nuestra calidad y profesionalismo nos han convertido en la opción
            preferida de las principales distribuidoras, cooperativas,
            financieras y los bancos más importantes del país. Con Avalúos
            Callejas, compras con la razón, no solo con el corazón. ¡Contáctanos
            y asegura tu inversión!
          </p>
        </p>
      </article>

      <article className="allied-companies__grid">
        {alliedCompanies.map(({ id, logo, title }) => {
          return (
            <article className="company" key={id}>
              <div className="company__content">
                <div className="company__image">
                  <Image
                    src={logo.src}
                    alt={title}
                    width={logo.width}
                    height={logo.height}
                  />
                </div>
                <h3>{title}</h3>
              </div>
            </article>
          );
        })}
      </article>
    </section>
  );
};

export default About;
