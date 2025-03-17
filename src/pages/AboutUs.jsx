import { motion } from "motion/react";

import { Body } from "../components/body/Body";

import aboutHeroImage from "../assets/about/company.svg";

const aboutInfo = [
  {
    title: "Nuestros inicios",
    description:
      "Metal-Maq nació en General Pico, La Pampa, una ciudad con una rica tradición industrial y metalúrgica. Desde sus primeros años, nuestra empresa se enfocó en satisfacer las necesidades de la industria local, ofreciendo soluciones en diseño, fabricación y reparación de máquinas, matrices y dispositivos para diversos sectores",
  },
  {
    title: "Crecimiento y Desarrollo",
    description:
      "A lo largo de los años, Metal-Maq ha experimentado un crecimiento sostenido. Actualmente, contamos con una infraestructura de más de 700 m² ubicada en el parque industrial de General Pico. Nuestra capacidad nos permite atender a industrias metalúrgicas, metalmecánicas, alimenticias, plásticas por rotomoldeo y agroganaderas. Nuestro equipo está compuesto por técnicos y operarios con diversas habilidades y experiencias. Esta diversidad nos permite abordar y solucionar las necesidades específicas de nuestros clientes, desde el análisis y rediseño de procesos de fabricación hasta el diseño asistido por computadora, corte, mecanizado y armado de estructuras",
  },
  {
    title: "Filosofía de Trabajo",
    description:
      "En Metal-Maq, creemos en la integración y participación activa de nuestros clientes en todo el ciclo de vida del servicio. Nuestra mayor virtud es la capacidad de adaptación y flexibilidad con la que atendemos cada necesidad, aportando siempre soluciones innovadoras y económicamente viables",
  },
  {
    title: "Visión a Futuro",
    description:
      "Nos proyectamos como proveedores destacados en el mercado nacional y latinoamericano, con líneas de productos propios que reflejen nuestra dedicación a la calidad y la innovación",
  },
];

export const AboutUs = () => {
  return (
    <Body>
      <motion.picture
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-3xl mx-auto select-none h-96 md:h-auto"
      >
        <img
          src={aboutHeroImage}
          alt="Company hero image"
          className="object-cover h-full md:object-contain"
        />
      </motion.picture>

      <article className="flex flex-col items-center justify-center max-w-3xl px-5 mx-auto gap-y-5">
        {aboutInfo.map(({ description, image, title }, index) => (
          <AboutSection description={description} title={title} key={index} />
        ))}
      </article>
    </Body>
  );
};

function AboutSection({ title, description }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 justify-items-center`}
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <p className="text-sm italic text-center text-neutral-500">
          {description}
        </p>
      </div>
    </motion.section>
  );
}
