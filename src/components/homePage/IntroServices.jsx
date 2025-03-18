import { motion } from "motion/react";
import { Link } from "wouter";

import qualityImage from "../../assets/quality.svg";
import ideaImage from "../../assets/idea.svg";
import puzzleImage from "../../assets/puzzle.svg";
import progressImage from "../../assets/progress.svg";
import contactImage from "../../assets/contact.svg";

import bossImage from "../../assets/boss.svg";

export const IntroServices = () => {
  const services = [
    { title: "Compromiso con la excelencia", image: qualityImage },
    { title: "Procesos innovadores y eficientes", image: ideaImage },
    {
      title: "Soluciones adaptadas a cada necesidad",
      image: puzzleImage,
    },
    {
      title: "Transformamos el metal en soluciones que impulsan tu negocio",
      image: progressImage,
    },
  ];

  return (
    <section className="w-full">
      <article className="grid items-center grid-cols-1 lg:grid-cols-2">
        <article className="flex flex-col items-center justify-center w-full mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="px-5 mb-2 text-2xl font-bold text-center lg:text-3xl"
          >
            Calidad y Precisión por proyecto
            <hr className="border-2 w-1/2 mx-auto border-sky-300 mt-1 mb-2" />
          </motion.h2>

          <ul className="flex flex-col items-center justify-center w-full px-2 mx-auto gap-y-5">
            {services.map(({ title, image }, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.3,
                }}
                className="w-full"
              >
                <span
                  key={index}
                  className={`flex items-center gap-x-4 justify-start w-full pl-5`}
                >
                  <img src={image} alt="Service image" className="w-6 h-6" />
                  <h3 className="w-full text-base text-start">{title}</h3>
                </span>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.3,
              }}
              className=""
            >
              <Link
                href={"/support"}
                className={`flex items-center gap-x-4 justify-start w-full lg:px-5 px-3 border-2 border-emerald-500 hover:bg-emerald-50 py-1.5 lg:py-2 rounded-md mt-5 hover:shadow-md hover:shadow-emerald-500/25 transition-all duration-300`}
              >
                <img
                  src={contactImage}
                  alt="Contact image"
                  className="w-6 h-6"
                />
                <h3 className="w-full text-base font-bold text-start text-emerald-500">
                  Agende un entrevista{" "}
                </h3>
              </Link>
            </motion.li>
          </ul>
        </article>

        <motion.picture
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="px-5 -order-1 lg:order-1"
        >
          <img src={bossImage} alt="" className="w-full" />
        </motion.picture>
      </article>
    </section>
  );
};
